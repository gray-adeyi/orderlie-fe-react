import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/Home/landingPage.jsx';
import Homepage from './pages/Home/Homepage.jsx';
import NewClass from './pages/Home/NewClass.jsx';
import EditProfilePage from './pages/Home/editProfile.jsx';
import UploadBioData from './pages/Home/UploadBioData.jsx';

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
				path: '/newclass',
				element: <NewClass />,
			},
			{
				path: '/edit-profile',
				element: <EditProfilePage />,
			},
			{
				path: '/upload-bio-data',
				element: <UploadBioData />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
