import { useEffect, useState } from 'react';
interface ISortFilterSectionProps {
	breeds?: string[];
	setBreed?: (breed: string) => void;
}

const SortFilterSection = ({ breeds, setBreed }: ISortFilterSectionProps) => {
	const [dropdDownOpen, setDropdownOpen] = useState<boolean>(false);

	const handleDropdown = () => {
		setDropdownOpen(!dropdDownOpen);
	};

	const handleDropdownOption = (breed: string) => {
		setDropdownOpen(!dropdDownOpen);
		if (setBreed) {
			setBreed(breed);
		}
	};
	useEffect(() => {
		if (breeds && setBreed) {
			setBreed(breeds[0]);
		}
	}, [breeds]);

	return (
		<div
			className='flex flex-wrap justify-end
 pr-2 pt-2 md:pr-5 md:pt-5 bg-blue-200 dark:bg-blue-100'
		>
			<div className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/2'>
				<p className='text-gray-900'>filter section</p>
			</div>
			<div
				className='flex md:justify-end
 pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/2'
			>
				<div>
					<button
						id='dropdownDefaultButton'
						data-dropdown-toggle='dropdown'
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						type='button'
						onClick={handleDropdown}
					>
						Dog Breeds
						<svg
							className='w-2.5 h-2.5 ms-3'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m1 1 4 4 4-4'
							/>
						</svg>
					</button>

					<div
						id='dropdown'
						className={`z-10 ${
							dropdDownOpen ? '' : 'hidden'
						} absolute max-h-[200px] overflow-y-auto bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}
					>
						<ul
							className='py-2 text-sm text-gray-700 dark:text-gray-200'
							aria-labelledby='dropdownDefaultButton'
						>
							{breeds?.map((breed, i) => {
								return (
									<li key={i}>
										<a
											// href='#'
											onClick={() => handleDropdownOption(breed)}
											className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
										>
											{breed}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SortFilterSection;
