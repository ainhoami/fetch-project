import DogCard from '../components/DogCard/DogCard';
import PageRibbon from '../components/PageRibbon/PageRibbon';

const Dogs = () => {
	const fakeObj = {
		id: 'id',
		img: 'img',
		name: 'name',
		age: 7,
		zip_code: 'zipc',
		breed: 'bread',
	};
	return (
		<>
			<PageRibbon />
			<div className='text-black dark:text-white'>filtering stuff</div>
			<div className='flex flex-wrap pr-2 pt-2 md:pr-5 md:pt-5 bg-blue-200 dark:bg-gray-900'>
				{[
					fakeObj,
					fakeObj,
					fakeObj,
					fakeObj,
					fakeObj,
					fakeObj,
					fakeObj,
					fakeObj,
					fakeObj,
				].map((card, i) => {
					return (
						<div className='pl-5 pr-4 md:pr-0 pb-5 basis-1/1 md:basis-1/4 '>
							<DogCard card={card} key={i} />
						</div>
					);
				})}
			</div>
			<div>Dogs</div>
		</>
	);
};
export default Dogs;
