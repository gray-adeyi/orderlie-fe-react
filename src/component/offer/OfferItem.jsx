import React from 'react'

const OfferItem = ({ image, title, text, reverse }) => {
    return (
        <div style={{flexFlow: reverse && 'row-reverse'}} className='offer-item'>
            <div className="offer-text-container">
                <h3 className="offer-text-title">
                    {title}
                </h3>
                <p className="offer-text-body">
                    {text}
                </p>
            </div>
            <div className="offer-img-container">
                <img src={image} alt="offer" className='offer-img' />
            </div>
        </div>
    )
}

export default OfferItem