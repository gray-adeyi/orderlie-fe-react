import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/Home/landingPage.jsx';
import Homepage from './pages/Home/Homepage.jsx';
<<<<<<< HEAD
import EditProfilePage from './pages/Home/editProfile.jsx';

=======
import NewClass from './pages/Home/NewClass.jsx';
>>>>>>> 86da3b36abcdb8548463309fb0258dd7013e4d58
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
			{
				path: '/user',
				element: <Homepage />,
			},
			{
<<<<<<< HEAD
				path:'/edit-profile',
				element: <EditProfilePage/>
			}
=======
				path: '/newclass',
				element: <NewClass />,
			},
>>>>>>> 86da3b36abcdb8548463309fb0258dd7013e4d58
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
