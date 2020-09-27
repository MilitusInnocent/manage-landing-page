import React from 'react';

const SliderCard = ({image, name, text}) => {
    return (
            <div className="slider__card">
                <div className="slider__card__image__container">
                    <img src={image} alt=''/>
                </div>
                <div className="slider__card__textbox">
                    <p className="slider__card__textbox__name">By {name}</p>
                    <p className="slider__card__textbox__text">{text}</p>
                </div>
            </div>
    )
}

export default SliderCard