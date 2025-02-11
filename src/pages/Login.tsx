import './Login.scss';
import SignIn from '../components/SignInForm/SignInForm';

const Login = () => {
	return (
		<div className='Login__container flex'>
			<div className='basis-2/2 md:basis-1/2 h-screen flex justify-center items-center bg-blue-500 md:bg-blue-200'>
				<SignIn />
			</div>
			<div className='Login__rightCol hidden md:block basis-1/2 flex justify-center'></div>
		</div>
	);
};
export default Login;
