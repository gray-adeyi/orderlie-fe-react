import React from 'react';
import './App.css';

import Header from './component/Header';
import Footer from './component/footer';
import { Outlet } from 'react-router-dom';
import Homepage from './component/Homepage/Homepage';

function App() {
	return (
		<>
			<div className='w-screen h-auto flex flex-auto '>
				<Header />
			</div>
			<Homepage />
			{/* <Outlet /> */}
			<div>
				<Footer />
			</div>
		</>
	);
}

export default App;
