import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const OfferItem = ({ image, title, text, reverse }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			style={{ flexFlow: reverse && 'row-reverse' }}
			className='offer-item'>
			<div
				className='offer-text-container'
				data-aos='fade-left'>
				<h3 className='offer-text-title'>{title}</h3>
				<p className='offer-text-body'>{text}</p>
			</div>
			<div
				className='offer-img-container'
				data-aos='fade-right'>
				<img
					src={image}
					alt='offer'
					className='offer-img'
				/>
			</div>
		</div>
	);
};

export default OfferItem;
