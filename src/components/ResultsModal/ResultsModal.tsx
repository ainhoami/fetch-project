import DogCard from '../DogCard/DogCard';
import { IDog } from '../../pages/Dogs';

interface IResultModal {
	dog: IDog[];
	setModalOpen: () => void;
}

const ResultsModal = ({ dog, setModalOpen }: IResultModal) => {
	return (
		<div className='fixed inset-0 flex items-center justify-center'>
			<div className='min-w-[375px] bg-white p-6 rounded-lg shadow-lg text-black flex flex-col justify-end'>
				<h2 className='text-xl text-center font-bold mb-4'>
					Matching Dog
				</h2>
				<DogCard card={dog[0]} />
				<button
					onClick={setModalOpen}
					className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default ResultsModal;
