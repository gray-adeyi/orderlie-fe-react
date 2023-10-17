import React from 'react';
import img from '../../assets/hom-img.png';
import Overview from '../../component/Homepage/Overview';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Homepage = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const style = {
		gap: 'gap-3',
	};
	return (
		<div className='w-screen h-auto items-center px-4  md:px-20 '>
			<div className='md:px-5 px-2 py-10 '>
				<div
					className='grid grid-cols-1 md:grid-cols-2'
					data-aos='fade-up'>
					<div className=' flex flex-col gap-5'>
						<div>
							<h3
								className={`text-3xl md:text-5xl font-bold spacing-4 md:leading-12 text-gray-600 ${style.gap} `}>
								Simplify attendance tracking with{' '}
								<span className=' text-bgColor pl-0 md:pr-40'>Orderlie</span>
							</h3>
						</div>
						<div>
							<p className=' text-lg md:text-xl items-start w-auto md:w-[500px] leading-6'>
								Generate neat, custumizable report and attendance in docs,
								Excel, or PDF format. Keep everything organized on the homepage!
							</p>
						</div>
					</div>
					<div className='w-full md:w-full mt-4 md:mt-1'>
						<img
							src={img}
							alt='img'
							className=''
						/>
					</div>
				</div>
				<Overview />
			</div>
		</div>
	);
};

export default Homepage;
