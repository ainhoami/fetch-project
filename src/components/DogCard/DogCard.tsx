import Heart from 'react-heart';
import { IDog } from '../../pages/Dogs';
interface DogCardProps {
	card: IDog;
	favoriteList?: string[];
	setFavoriteList?: (val: string[]) => void;
}
const DogCard: React.FC<DogCardProps> = ({
	card,
	favoriteList,
	setFavoriteList,
}: DogCardProps) => {
	const handleFavorite = (val: string) => {
		if (setFavoriteList && favoriteList) {
			if (favoriteList.includes(val)) {
				setFavoriteList(favoriteList.filter((dogId) => dogId !== val));
			} else {
				setFavoriteList([...favoriteList, val]);
			}
		}
	};

	return (
		<div className='bg-blue-50 flex-row border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-700'>
			<div className=''>
				<img
					className='rounded-t-lg rounded-t-lg w-full object-cover h-70'
					src={card.img}
					alt={`Dog name: ${card.breed}. Breed: ${card.breed}`}
				/>
			</div>

			<div className='p-5 flex flex-col items-center justify-center'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{card.name}: {card.age}
				</h5>

				<p className='mb-1 font-normal text-gray-700 dark:text-gray-400 text-center'>
					Breed: {card.breed}
				</p>
				<p className='mb-4 font-normal text-gray-700 dark:text-gray-400'>
					ZipCode: {card.zip_code}
				</p>
				{favoriteList && (
					<span className=''>
						<Heart
							style={{ width: '2rem' }}
							inactiveColor='pink'
							isActive={favoriteList.includes(card.id)}
							activeColor='#D22B2B'
							onClick={() => handleFavorite(card.id)}
						/>
					</span>
				)}
			</div>
		</div>
	);
};

export default DogCard;
