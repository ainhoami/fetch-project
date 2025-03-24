import { useEffect, useState } from 'react';
import { ICurrentPage, IFilterOptions } from '../../pages/Dogs';

interface IPagination {
	setFilterOptions: (option: Record<string, any>) => void;
	currentPage: ICurrentPage;
}

const Pagination = ({ setFilterOptions, currentPage }: IPagination) => {
	const params = new URLSearchParams(currentPage.next?.split('?')[1]);
	const paramsfrom = Number(params.get('from'));
	const [textForResults, setTextForResults] = useState<string>('');
	const size = 25;
	const noResults = currentPage.total === 0 ? '0 results found' : '';

	useEffect(() => {
		const startText = paramsfrom - size + 1;
		const endText =
			paramsfrom > currentPage.total ? currentPage.total : paramsfrom;
		setTextForResults(
			noResults ||
				`Showin ${startText} to ${endText} of ${currentPage.total} results`,
		);
	}, [params]);

	const handlePagination = (event: React.MouseEvent<HTMLButtonElement>) => {
		const action = event.currentTarget.innerHTML;
		let from: number = 0;
		let movePage: boolean = false;

		if (action === 'Previous') {
			from = paramsfrom > 25 ? paramsfrom - size * 2 : 0;
			movePage = paramsfrom - size !== 0;
		} else {
			from =
				currentPage.total < paramsfrom ? paramsfrom - size : paramsfrom;
			movePage = paramsfrom === from;
		}

		if (movePage) {
			setFilterOptions((prev: IFilterOptions) => {
				return {
					...prev,
					from: from.toString(),
				};
			});
		}
	};
	return (
		<div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg'>
			<div className='flex flex-1 items-center justify-center md:justify-between'>
				<div>
					<p className='text-sm text-gray-700'>{textForResults}</p>
				</div>
				<div className='flex flex-1 justify-end'>
					<button
						onClick={handlePagination}
						className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
					>
						Previous
					</button>
					<button
						onClick={handlePagination}
						className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
