import { useEffect, useState } from 'react';
import { IFilterOptions } from '../../pages/Dogs';
import RadioInput from '../RadioInput/RadioInput';
interface ISortFilterSectionProps {
	breeds?: string[];
	filterOptions?: IFilterOptions;
	setFilterOptions: (option: Record<string, any>) => void;
}

const SortFilterSection = ({
	breeds,
	filterOptions,
	setFilterOptions,
}: ISortFilterSectionProps) => {
	const [dropdDownOpen, setDropdownOpen] = useState<boolean>(false);
	const [selectedOption, setSelectdeOption] = useState<string>('breed');
	const [selectedDirection, setSelectedDirection] = useState<string>('asc');

	const handleDropdown = () => {
		setDropdownOpen(!dropdDownOpen);
	};
	const handleDropdownOption = (breedChosen: string) => {
		setDropdownOpen(!dropdDownOpen);
		if (setFilterOptions) {
			setFilterOptions((prev: IFilterOptions) => {
				return {
					...prev,
					breeds: breedChosen,
				};
			});
		}
	};

	useEffect(() => {
		setFilterOptions((prev: IFilterOptions) => {
			return {
				...prev,
				sort: `${selectedOption}:${selectedDirection}`,
			};
		});
	}, [selectedDirection, selectedOption]);

	return (
		<>
			<div
				className='flex flex-wrap justify-end
 pr-2 pt-2 md:pr-5 md:pt-5 bg-blue-200 dark:bg-blue-100'
			>
				<div className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/3'>
					<RadioInput
						options={{
							breed: 'Breed',
							age: 'Age',
							name: 'Name',
						}}
						selectedVal={[selectedOption, setSelectdeOption]}
					/>
				</div>
				<div className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/3'>
					<RadioInput
						selectedVal={[selectedDirection, setSelectedDirection]}
						options={{ asc: 'Asc', desc: 'Desc' }}
					/>
				</div>
				<div
					className='flex md:justify-end
 pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/3'
				>
					<div>
						<p className='text-black'>Dogs Breed Filter</p>
						<button
							id='dropdownDefaultButton'
							data-dropdown-toggle='dropdown'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							type='button'
							onClick={handleDropdown}
						>
							{filterOptions?.breeds || 'Dog Breeds'}
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
												onClick={() =>
													handleDropdownOption(breed)
												}
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
		</>
	);
};

export default SortFilterSection;
