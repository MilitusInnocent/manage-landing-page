import React from 'react';

const AboutCard = ({ number, heading, text }) => (
    <div className="about__card">
        <div style={{ display: "flex" }}>
            <span className="about__card__number">{number}</span>
            <h3 className="about__card__heading">{heading}</h3>
        </div>
        <p className="about__card__subheading">{text}</p>
    </div>
)

export default AboutCard