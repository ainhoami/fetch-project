import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DogCard from '../components/DogCard/DogCard';
import PageRibbon from '../components/PageRibbon/PageRibbon';
import axios from 'axios';
import SortFilterSection from '../components/SortFilterSection/SortFilterSection';

export interface Dog {
	id: string;
	img: string;
	name: string;
	age: number;
	zip_code: string;
	breed: string;
}

export interface IFilterOptions {
	zipCodes?: string;
	ageMin?: number;
	ageMax?: number;
	breeds?: string;
	sort?: string;
}
const Dogs = () => {
	const [favoriteList, setFavoriteList] = useState<string[]>([]);
	const [breeds, setBreeds] = useState<string[]>([]);
	const [filterOptions, setFilterOptions] = useState<IFilterOptions>({});
	const [isFavorite, setIsFavorite] = useState<boolean>(false);
	const [dogsOnDisplay, setDogsOnDisplay] = useState<Dog[]>([]);
	const baseUrl = import.meta.env.VITE_API_URL;
	const navigate = useNavigate();

	const handleSetFavorite = (val: string, isFavorite: boolean) => {
		setFavoriteList((prev) =>
			isFavorite ? [...prev, val] : prev.filter((id) => id !== val),
		);
	};

	useEffect(() => {
		axios
			.get(baseUrl + '/dogs/breeds', {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			})
			.then((res) => {
				setBreeds(res.data);
			})
			.catch((e) => {
				if (e.response.status === 401) {
					navigate('/login', { replace: true });
				}
				console.error(e.response);
			});
	}, []);

	useEffect(() => {
		let params = '';
		if (!Object.keys(filterOptions).length) {
			params = `?sort=breed:asc`;
		} else {
			Object.entries(filterOptions).forEach((el, index) => {
				params = params + `${index !== 0 ? '&' : '?'}${el[0]}=${el[1]}`;
			});
		}

		axios
			.get(`${baseUrl}/dogs/search${params}`, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			})
			.then((res) => {
				axios
					.post(baseUrl + '/dogs/', res.data.resultIds, {
						headers: {
							'Content-Type': 'application/json',
						},
						withCredentials: true,
					})
					.then((res) => {
						setDogsOnDisplay(res.data);
					})
					.catch((e) => console.error(e.response));
			})
			.catch((e) => {
				if (e.response.status === 401) {
					navigate('/login', { replace: true });
				}
			});
	}, [filterOptions]);

	return (
		<>
			<PageRibbon />
			<SortFilterSection
				breeds={breeds}
				// setBreed={setFilteredBreed}
				filterOptions={filterOptions}
				setFilterOptions={setFilterOptions}
			/>
			<div className='flex flex-wrap pr-2 pt-2 md:pr-5 md:pt-5 bg-blue-200 dark:bg-gray-900'>
				{dogsOnDisplay.map((card, i) => {
					return (
						<div
							key={i}
							className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/4'
						>
							<DogCard
								card={card}
								setFavorite={handleSetFavorite}
							/>
						</div>
					);
				})}
			</div>
			<div>Dogs</div>
		</>
	);
};
export default Dogs;
