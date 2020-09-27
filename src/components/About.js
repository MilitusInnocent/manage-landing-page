import React from 'react';
import {AboutCard, Button} from './';


const About = () => (
    <div className="about">
        <div className="about__textbox">
            <h2 className="about__textbox__heading">What's different about Manage?</h2>
            <p className="about__textbox__subheading">Manage provides all the 
            functionality your team needs, without the complexity. 
            Our software is tailor-made for modern digital product teams.</p>
        </div>
        <div className="about__card__container">
            <Button color='orange' text='01' />
            <AboutCard
                heading='Track company-wide progress'
                text='See how your day-to-day tasks fit into the wider vision. 
                Go from tracking progress at the milestone level all the way done to the 
                smallest details. Never lose sight of the bigger picture again.'
            />

            <Button color='orange' text='02' />
            <AboutCard
                heading='Advanced built-in reports'
                text="Set internal delivery estimates and track progress toward 
                company goals. Our customisable dashboard helps you build out the 
                reports you need to keep key stakeholders informed."
            />

            <Button color='orange' text='03' />
            <AboutCard
                heading='Everything you need in one place'
                text="Stop jumping from one service to another to communicate, 
                store files, track tasks and share documents. Manage offers an 
                all-in-one team productivity solution."
            />

        </div>
    </div>
)

export default About;