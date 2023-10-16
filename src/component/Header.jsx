import React from 'react';
import menu from '../assets/Vector.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {
	const location = useLocation();
	const [isMenu, setIsMenu] = useState(false);
	return (
		<header className='w-screen z-50 h-auto items-center drop-shadow-md bg-bgColor'>
			{/* Desktop */}
			<div className=' hidden md:flex justify-between items-center w-full px-20 py-5 '>
				<div>
					<h1 className=' text-logo text-5xl font-extrabold'>Orderlie</h1>
				</div>
				<div className='flex items-center gap-28'>
					<ul className='flex items-center gap-28'>
						<Link to={'/'}>
							<li className=' text-white text-xl font-semibold cursor-pointer hover:scale-110'>
								Home
							</li>
						</Link>
						<li className=' text-white text-xl font-semibold cursor-pointer hover:scale-110'>
							About
						</li>
						<li className=' text-white text-xl font-semibold cursor-pointer hover:scale-110'>
							Pricing
						</li>
					</ul>
				</div>
				<Link to={'/user'}>
					<div className='bg-white rounded-lg py-2 px-4'>
						{/* The condition here is just checking the url but normally it should be user */}
						{location.pathname === '/' ? (
							<p className=' font-semibold text-xl text-bgColor cursor-pointer hover:scale-110'>
								Log In
							</p>
						) : (
							<div className='flex items-center justify-center gap-1'>
								<FaUser className=' text-bgColor text-4xl rounded-full border-2' />{' '}
								<p className='font-semibold text-xl text-bgColor cursor-pointer hover:scale-110'>
									Hi, Joy
								</p>{' '}
							</div>
						)}
					</div>
				</Link>
			</div>
			{/* Mobile */}
			<div className='flex items-center justify-between md:hidden px-6 py-5 w-screen '>
				<div>
					<h1 className=' text-logo text-3xl font-extrabold'>Orderlie</h1>
				</div>
				<div className='relative'>
					{/* Framamotion for while tap animation */}
					<motion.img
						src={menu}
						alt=''
						whileTap={{ scale: 0.8 }}
						onClick={() => setIsMenu(!isMenu)}
					/>
					{/* pop up menu window */}
					{isMenu && (
						<motion.div
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, y: 200 }}
							className=' bg-gray-50 shadow-xl rounded-lg flex flex-col top-0 right-0 fixed w-full h-screen z-[101] p-5'>
							<div className='flex justify-end'>
								<MdCancel
									className='text-red-500 text-3xl'
									onClick={() => setIsMenu(false)}
								/>
							</div>
							<ul className='flex flex-col gap-1 items-center'>
								<Link to={'/'}>
									<li
										className='px-4 py-2 font-bold text-2xl text-bgColor cursor-pointer '
										onClick={() => setIsMenu(false)}>
										Home
									</li>
								</Link>
								<li
									className='px-4 py-2 font-bold text-2xl text-bgColor cursor-pointer '
									onClick={() => setIsMenu(false)}>
									About
								</li>
								<li
									className='px-4 py-2 font-bold text-2xl text-bgColor cursor-pointer '
									onClick={() => setIsMenu(false)}>
									Pricing
								</li>
							</ul>
							<Link
								to={'/user'}
								className='items-center flex justify-center'>
								<button
									className='px-4 py-2 font-bold text-2xl text-white bg-bgColor rounded-md cursor-pointer'
									onClick={() => setIsMenu(false)}>
									Log In
								</button>
							</Link>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
