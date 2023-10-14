import React from 'react';
import img from '../../assets/hom-img.png';

const Homepage = () => {
	return (
		<div className='w-screen h-auto items-center px-6  md:px-20 '>
			<div className='px-5 py-10 '>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div className=' flex flex-col gap-4'>
						<h3 className='text-5xl font-bold'>Simplify attendance</h3>
						<h3 className='text-5xl font-bold'>tracking with</h3>
						<h3 className='text-5xl font-bold text-bgColor'>Orderlie</h3>
						<p className=' text-xl items-start'>
							Generate neat, customizable reports and attendance
						</p>
						<p className=' text-xl items-start'>
							in docs, Excel, or PDF format. Keep everything
						</p>
						<p className=' text-xl items-start'>organized on the homepage!</p>
					</div>
					<div className=''>
						<img
							src={img}
							alt='img'
							className='w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
