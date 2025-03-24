import { useState } from 'react';
import { IFilterOptions } from '../../pages/Dogs';

interface IDropdown {
	dropdownValues?: string[];
	// selectedVal: [val: string, (val: string) => void];
	setFilterOptions: (option: Record<string, any>) => void;
	name?: string;
	filterKey?: string;
}

const Dropdown = ({
	dropdownValues,
	setFilterOptions,
	name,
	filterKey,
}: IDropdown) => {
	const [dropdDownOpen, setDropdownOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const handleDropdown = () => {
		setDropdownOpen(!dropdDownOpen);
	};

	const handleDropdownOption = (val: string) => {
		setDropdownOpen(!dropdDownOpen);
		setValue(val);
		// Reset pagination if filter changes
		if (setFilterOptions && filterKey) {
			setFilterOptions((prev: IFilterOptions) => {
				return {
					...prev,
					[filterKey]: val,
					from: '0',
				};
			});
		}
	};

	return (
		<div className=''>
			<p className='text-black'>{name}</p>
			<button
				id='dropdownDefaultButton'
				data-dropdown-toggle='dropdown'
				className='min-w-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center flex justify-end items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				type='button'
				onClick={handleDropdown}
			>
				{value || `Select ${name}`}
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
				} absolute max-h-[200px] overflow-y-auto bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-[200px] dark:bg-gray-700`}
			>
				<ul
					className='py-2 text-sm text-gray-700 dark:text-gray-200'
					aria-labelledby='dropdownDefaultButton'
				>
					{dropdownValues?.map((value, i) => {
						return (
							<li key={i}>
								<a
									onClick={() => handleDropdownOption(value)}
									className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
								>
									{value}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
