import React from 'react';

import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';

function App() {
	return (
		<>
			<div className='w-screen h-auto flex flex-auto '>
				<Header />
			</div>
			{/* <Homepage /> */}
			<Outlet />
		</>
	);
}

export default App;
