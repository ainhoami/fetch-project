interface Dog {
	id: string;
	img: string;
	name: string;
	age: number;
	zip_code: string;
	breed: string;
}
interface DogCardProps {
	card: Dog;
}
import testImage from '../../assets/login_dog.jpg';

const DogCard: React.FC<DogCardProps> = ({ card }) => {
	return (
		<div className='bg-white flex-row border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-700'>
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
				<a
					href='#'
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					favorite
					<svg
						className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 14 10'
					>
						<path
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M1 5h12m0 0L9 1m4 4L9 9'
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default DogCard;
