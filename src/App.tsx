import { useState } from 'react';
// src/routes.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dogs from './pages/Dogs';
import Login from './pages/Login';

const App: React.FC = () => {
	return (
		<Router>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/dogs' element={<Dogs />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
};

export default App;
