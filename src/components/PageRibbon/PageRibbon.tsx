import { useParams } from 'react-router-dom';

const PageRibbon = () => {
	const { user } = useParams();
	return (
		<div className='p-10 bg-blue-500 capitalize text-xl font-bold'>
			Welcome, {user}
		</div>
	);
};
export default PageRibbon;
