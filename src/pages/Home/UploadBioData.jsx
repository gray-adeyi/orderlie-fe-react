import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UploadBioData = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [bioData, setBioData] = useState({
		firstName: '',
		lastName: '',
		middleName: '',
		MatricNumber: '',
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setBioData({ ...bioData, [name]: value });
	};

	const createBioData = () => {
		if (
			!bioData.firstName ||
			!bioData.lastName ||
			!bioData.middleName ||
			!bioData.MatricNumber
		) {
			setError('Please fill all fields');
			return;
		}
		// Clear the error message if all fields are filled
		setError('');

		// Logic to create class using formData
		setIsLoading(true);

		// Simulating an API call
		setTimeout(() => {
			// After successful creation
			setIsLoading(false);
			setBioData();
			setSuccessMessage('Class Created Successfully');
		}, 2000);
	};
	return (
		<div className=' container mx-auto my-10 font-serrat'>
			<div className='flex justify-center space-x-2 px-3'>
				{/* Section1 */}
				<Link to='/upload-bio-data'>
					<button className='flex rounded-xl py-2 px-3 sm:px-5 md:px-10 text-white bg-bgColor'>
						Upload Bio-Data
					</button>
				</Link>
				<Link to='/classlist'>
					<button className='flex rounded-xl border border-sm py-2 px-3  text-bgColor border-bgColor  md:px-5 lg:px-10'>
						Class List
					</button>
				</Link>
				<Link to='/newclass'>
					<button className=' rounded-xl border border-sm py-2 px-3 text-bgColor border-bgColor sm:py-2 md:px-5 lg:px-10'>
						Create New List
					</button>
				</Link>
			</div>
			{/* Section 2 */}
			<div className='mt-10 flex justify-center'>
				<div className='border border-bgColor w-full  mx-4 md:mx-14 rounded-3xl p-2 md:px-5 px-4 py-4 mb-6 '>
					<h1 className=' text-2xl md:text-4xl font-semibold my-5  text-center'>
						Upload Biodata
					</h1>
					<div className='grid grid-cols-1 gap-4 md:px-32'>
						<div className='flex flex-col'>
							<label className=' text-xl md:text-2xl font-semibold'>
								First Name
							</label>
							<input
								type='text'
								name='firstName'
								value={bioData.fName}
								onChange={handleInputChange}
								className='mt-1 p-2 md:p-4 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400'
								placeholder='Unique User Name Used To Refer To The Class'
							/>
						</div>
						<div className='flex flex-col'>
							<label className=' text-xl md:text-2xl font-semibold'>
								Last Name
							</label>
							<input
								type='text'
								name='lastName'
								value={bioData.lName}
								onChange={handleInputChange}
								className='mt-1 p-2 md:p-4 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400'
								placeholder=''
							/>
						</div>
						<div className='flex flex-col'>
							<label className=' text-xl md:text-2xl font-semibold'>
								Middle Name
							</label>
							<input
								type='text'
								name='middleName'
								value={bioData.mName}
								onChange={handleInputChange}
								className='mt-1 p-2 md:p-4 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400'
								placeholder=''
							/>
						</div>
						<div className='flex flex-col'>
							<label className=' text-xl md:text-2xl font-semibold'>
								Matric No
							</label>
							<input
								type='text'
								name='MatricNumber'
								value={bioData.matNo}
								onChange={handleInputChange}
								className='mt-1 p-2 md:p-4 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400'
								placeholder=''
							/>
						</div>
						<div
							className=' btn mt-6 w-full rounded-xl py-2 px-4 text-white bg-bgColor flex items-center justify-center font-bold text-xl'
							onClick={createBioData}
							disabled={isLoading}>
							<button className=''>
								{isLoading ? 'Creating...' : 'Create'}
							</button>
						</div>
						{successMessage && (
							<div className='mt-4 text-green-500'>{successMessage}</div>
						)}
						{error && <div className='text-red-500'>{error}</div>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadBioData;
