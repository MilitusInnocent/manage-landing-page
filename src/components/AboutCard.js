import React from 'react';

const AboutCard = ({ heading, text}) => {
    return (
        <div className="about__card">
            <h3 className="about__card__heading">{heading} </h3>
            <p className="about__card__subheading">{text}</p>
        </div>
    )
}

export default AboutCard