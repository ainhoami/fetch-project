import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_API_URL;

const SignInForm = () => {
	const [name, setName] = useState('default');
	const [email, setEmail] = useState('defualt@email.com');
	const navigate = useNavigate();

	const handleLoginSubmit = () => {
		axios
			.post(
				baseUrl + '/auth/login',
				{
					name,
					email,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				},
			)
			.then((res) => {
				if (res.status === 200) {
					navigate(`/dogs/${name}`);
				}
				console.log(res, 'res');
			})
			.catch((error) => {
				console.error(error);
				console.log(error, 'error auth');
			});
	};

	return (
		<div className='md:bg-blue-500 md:p-30 rounded-lg'>
			<div>
				<label
					htmlFor='name'
					className='block text-sm/6 font-medium text-thite'
				>
					Name
				</label>
				<div className='mt-1'>
					<input
						id='name'
						name='user-name'
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						autoComplete='off'
						className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
					/>
				</div>
			</div>

			<div>
				<div className='flex items-center justify-between mt-2'>
					<label
						htmlFor='email'
						className='block text-sm/6 font-medium text-white-900'
					>
						Email
					</label>
				</div>
				<div className='mt-1'>
					<input
						id='email'
						name='email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete='off'
						className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
					/>
				</div>
			</div>

			<div className='mt-5'>
				<button
					type='submit'
					onClick={handleLoginSubmit}
					className='flex w-full justify-center bg-blue-950 md:bg-grey-950 rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
				>
					Sign in
				</button>
			</div>
		</div>
	);
};

export default SignInForm;
