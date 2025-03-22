import { useState } from 'react';
import Heart from 'react-heart';
import { Dog } from '../../pages/Dogs';
interface DogCardProps {
	card: Dog;
	setFavorite: (val: string, fav: boolean) => void;
}
const DogCard: React.FC<DogCardProps> = ({
	card,
	setFavorite,
}: DogCardProps) => {
	const [isHeartActive, setIsHeartActive] = useState<boolean>(false);

	const handleFavorite = () => {
		setFavorite(card.id, !isHeartActive);
		setIsHeartActive(!isHeartActive);
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
				<span className=''>
					<Heart
						style={{ width: '2rem' }}
						inactiveColor='pink'
						isActive={isHeartActive}
						activeColor='#D22B2B'
						onClick={handleFavorite}
					/>
				</span>
			</div>
		</div>
	);
};

export default DogCard;
