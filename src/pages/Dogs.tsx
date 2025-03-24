import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DogCard from '../components/DogCard/DogCard';
import PageRibbon from '../components/PageRibbon/PageRibbon';
import axios from 'axios';
import SortFilterSection from '../components/SortFilterSection/SortFilterSection';
import Pagination from '../components/Pagination/Pagination';

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
	from?: string;
}

export interface ICurrentPage {
	next: string;
	total: number;
}

const Dogs = () => {
	const [favoriteList, setFavoriteList] = useState<string[]>([]);
	const [breeds, setBreeds] = useState<string[]>([]);
	const [filterOptions, setFilterOptions] = useState<IFilterOptions>({});
	const [dogsOnDisplay, setDogsOnDisplay] = useState<Dog[]>([]);
	const [currentPage, setCurrentPage] = useState<ICurrentPage>({
		next: '',
		total: 0,
	});
	const baseUrl = import.meta.env.VITE_API_URL;
	const navigate = useNavigate();

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
				setCurrentPage({ next: res.data.next, total: res.data.total });
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
				setFilterOptions={setFilterOptions}
			/>

			<div className='px-5 bg-blue-200 dark:bg-gray-900'>
				<Pagination
					currentPage={currentPage}
					setFilterOptions={setFilterOptions}
				/>
			</div>
			<div className='flex flex-wrap pr-2 pt-2 md:pr-5 md:pt-5 bg-blue-200 dark:bg-gray-900'>
				{dogsOnDisplay.map((card, i) => {
					return (
						<div
							key={i}
							className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/4'
						>
							<DogCard
								card={card}
								favoriteList={favoriteList}
								setFavoriteList={setFavoriteList}
								// setFavorite={handleSetFavorite}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default Dogs;
