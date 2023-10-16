import React from 'react';
import { FaGithub, FaSlack, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Footer() {
	const location = useLocation();
	return (
		<footer className='bg-bgColor w-full h-auto '>
			{location.pathname === '/' ? (
				<div className='flex flex-wrap justify-between py-8 border-b border-white px-6 sm:px-24'>
					<div className='flex flex-col mb-5 sm:mb-0'>
						<div>
							<Link
								to='/'
								className='text-logo text-3xl font-extrabold sm:text-3xl'>
								Orderlie
							</Link>
							<h3 className='text-white text-md sm:text-xl'>
								Get things done in the easy way
							</h3>
						</div>

						<div className='mt-5'>
							<h1 className='text-white text-2xl mt-3'>Company</h1>
							<ul className='space-y-2 mt-3'>
								<li>
									<NavLink
										to='#'
										className='text-white mt-3'>
										Blogs
									</NavLink>
								</li>
								<li>
									<NavLink
										to='#'
										className='text-white mt-3'>
										About Us
									</NavLink>
								</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col mb-5 sm:mb-0 sm:flex-row'>
						<div className='mb-4 sm:mr-8'>
							<div>
								<h1 className='text-white text-2xl'>Resources</h1>
								<ul className='space-y-2 mt-3'>
									<li>
										<NavLink
											to='#'
											className='text-white mt-3'>
											Docs
										</NavLink>
									</li>
									<li>
										<NavLink
											to='#'
											className='text-white mt-3'>
											FAQs
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
						<div className='sm:mt-0'>
							<div className=''>
								<h1 className='text-white text-2xl'>Legal</h1>
								<ul className='space-y-2 mt-3'>
									<li>
										<NavLink
											to='#'
											className='text-white mt-3'>
											Terms of Service
										</NavLink>
									</li>
									<li>
										<NavLink
											to='#'
											className='text-white mt-3'>
											Privacy
										</NavLink>
									</li>
									<li>
										<NavLink
											to='#'
											className='text-white mt-3'>
											Cookie Policies
										</NavLink>
									</li>
									<li>
										<NavLink
											to='#'
											className='text-white mt-3'>
											End user agreement
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='flex flex-col mb-5 sm:mb-0 sm:items-center'>
						<h1 className='text-white text-2xl'>Support</h1>
						<h3 className='text-white mt-3'>oscaadoekiti@gmail.com</h3>
						<div className='flex mt-4'>
							<NavLink
								to='https://github.com/your-github-profile'
								className='text-white mr-4 text-3xl'
								target='_blank'
								rel='noopener noreferrer'>
								<FaGithub />
							</NavLink>
							<NavLink
								to='https://slack.com/your-slack-channel'
								className='text-white mr-4 text-3xl'
								target='_blank'
								rel='noopener noreferrer'>
								<FaSlack />
							</NavLink>
							<NavLink
								to='https://www.linkedin.com/in/your-linkedin-profile'
								className='text-white mr-4 text-3xl'
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedin />
							</NavLink>
							<NavLink
								to='https://twitter.com/your-twitter-profile'
								className='text-white text-3xl'
								target='_blank'
								rel='noopener noreferrer'>
								<RiTwitterXFill />
							</NavLink>
						</div>
					</div>
				</div>
			) : (
				''
			)}
			{/* other pages footer */}
			<div className='text-white text-center py-4 md:px-12'>
				{location.pathname === '/' ? (
					<p>
						{' '}
						&copy; {new Date().getFullYear()} OSCA Ado-Ekiti. All right reserved{' '}
					</p>
				) : (
					<div className='flex justify-between px-8 '>
						<p>&copy; {new Date().getFullYear()} - Orderlie</p>
						<div className='flex items-center justify-center gap-3 md:gap-5'>
							<NavLink
								to='https://facebook.com/your-facebook-profile'
								className='text-white text-2xl md:text-3xl'
								target='_blank'
								rel='noopener noreferrer'>
								<FiFacebook />
							</NavLink>
							<NavLink
								to='https://twitter.com/your-twitter-profile'
								className='text-white text-2xl md:text-3xl'
								target='_blank'
								rel='noopener noreferrer'>
								<RiTwitterXFill />
							</NavLink>
							<NavLink
								to='https://instagram.com/your-instagram-profile'
								className='text-white text-2xl md:text-3xl'
								target='_blank'
								rel='noopener noreferrer'>
								<FiInstagram />
							</NavLink>
							<NavLink
								to='https://linkeden.com/your-linkeden-profile'
								className='text-white text-2xl md:text-3xl'
								target='_blank'
								rel='noopener noreferrer'>
								<FiLinkedin />
							</NavLink>
						</div>
					</div>
				)}
			</div>
		</footer>
	);
}
