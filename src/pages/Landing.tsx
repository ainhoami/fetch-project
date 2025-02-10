import './Landing.scss';
const Landing = () => {
	return (
		<div className='Landing__container flex justify-center items-center'>
			<div className='Landing__LoginMessageContainer bg-indigo-500 w-140 rounded-lg p-5 opacity-95'>
				<p className=' font-bold text-white text-3xl text-center'>
					You need to be logged in to access
				</p>
				<div className='mt-2 font-bold  text-center underline decoration-solid'>
					<a href={'/login'} className='text-xl text-white'>
						Go to Login Page
					</a>
				</div>
			</div>
		</div>
	);
};
export default Landing;
