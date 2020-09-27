import React from 'react';

const SliderCard = ({ image, name, quote }) => {
    return (
        <div className="slider__card">
            <div className="slider__card__image__container">
                <img src={image} alt={`${name} avatar`} />
            </div>
            <div className="slider__card__textbox">
                <h5 className="slider__card__textbox__name">{name}</h5>
                <p className="slider__card__textbox__testimonial">{quote}</p>
            </div>
        </div>
)
}

export default SliderCard