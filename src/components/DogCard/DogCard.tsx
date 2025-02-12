import { useState } from 'react';
import testImage from '../../assets/login_dog.jpg';
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
					src={testImage}
					alt=''
				/>
			</div>

			<div className='p-5 flex flex-col items-center justify-center'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					Name: Age
				</h5>

				<p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
					Breed: breed
				</p>
				<p className='mb-4 font-normal text-gray-700 dark:text-gray-400'>
					Zip Code
				</p>
				<span className=''>
					<Heart
						style={{ width: '2rem' }}
						inactiveColor='white'
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
