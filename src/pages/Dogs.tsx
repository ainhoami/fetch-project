import { useEffect, useState } from 'react';
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

const Dogs = () => {
	const [favoriteList, setFavoriteList] = useState<string[]>([]);
	const [breeds, setBreeds] = useState<string[]>([]);
	const [isFavorite, setIsFavorite] = useState<boolean>(false);
	const baseUrl = import.meta.env.VITE_API_URL;

	const fakeObj = {
		id: '123',
		img: 'img',
		name: 'name',
		age: 7,
		zip_code: 'zipc',
		breed: 'bread',
	};
	const fakeObj2 = {
		id: '2222',
		img: 'img2',
		name: 'name2',
		age: 72,
		zip_code: 'zipc2',
		breed: 'bread2',
	};
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
				console.log(res);
			})

			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<PageRibbon />
			<SortFilterSection breeds={breeds} />
			<div className='flex flex-wrap pr-2 pt-2 md:pr-5 md:pt-5 bg-blue-200 dark:bg-gray-900'>
				{[
					fakeObj,
					fakeObj2,
					fakeObj,
					fakeObj2,
					fakeObj,
					fakeObj2,
					fakeObj,
					fakeObj2,
					fakeObj,
				].map((card, i) => {
					return (
						<div key={i} className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/4'>
							<DogCard card={card} setFavorite={handleSetFavorite} />
						</div>
					);
				})}
			</div>
			<div>Dogs</div>
		</>
	);
};
export default Dogs;
