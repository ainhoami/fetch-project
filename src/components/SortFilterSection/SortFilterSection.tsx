import { useEffect, useState } from 'react';
import { IFilterOptions } from '../../pages/Dogs';
import RadioInput from '../RadioInput/RadioInput';
import Dropdown from '../Dropdown/Dropdown';
interface ISortFilterSectionProps {
	breeds?: string[];
	setFavoriteList: (val: string[]) => void;
	setFilterOptions: (option: Record<string, any>) => void;
}

const SortFilterSection = ({
	breeds,
	setFilterOptions,
	setFavoriteList,
}: ISortFilterSectionProps) => {
	const [selectedOption, setSelectdeOption] = useState<string>('breed');
	const [selectedDirection, setSelectedDirection] = useState<string>('asc');
	const getAges = (num: number) => {
		const ages: string[] = [];
		for (let i = 0; i <= num; i++) {
			ages.push(i.toString());
		}
		return ages;
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
				className='flex flex-wrap
 pr-2 pt-2 md:pr-5 md:pt-5 bg-blue-200 dark:bg-gray-900'
			>
				<div className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/5 min-h-[128px]'>
					<RadioInput
						options={{
							breed: 'Breed',
							age: 'Age',
							name: 'Name',
						}}
						selectedVal={[selectedOption, setSelectdeOption]}
					/>
				</div>
				<div className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/5 min-h-[128px]'>
					<RadioInput
						selectedVal={[selectedDirection, setSelectedDirection]}
						options={{ asc: 'Asc', desc: 'Desc' }}
					/>
				</div>
				<div className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-3/5 flex flex-wrap justify-around'>
					<Dropdown
						dropdownValues={breeds}
						setFilterOptions={setFilterOptions}
						setFavoriteList={setFavoriteList}
						name='Dogs'
						filterKey='breeds'
					/>
					<Dropdown
						dropdownValues={getAges(20)}
						setFilterOptions={setFilterOptions}
						setFavoriteList={setFavoriteList}
						name='Min Age'
						filterKey='ageMin'
					/>
					<Dropdown
						dropdownValues={getAges(20)}
						setFilterOptions={setFilterOptions}
						setFavoriteList={setFavoriteList}
						name='Max Age'
						filterKey='ageMax'
					/>
				</div>
			</div>
		</>
	);
};

export default SortFilterSection;
