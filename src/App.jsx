import React from 'react';

import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import Homepage from './pages/Home/Homepage';

function App() {
	return (
		<>
			<div className='w-screen h-auto flex flex-auto '>
				<Header />
			</div>
			{/* <Homepage /> */}
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
