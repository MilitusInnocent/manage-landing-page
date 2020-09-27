import React from 'react';
import { Button } from './';
import heroImage from '../images/illustration-info.svg';

const Header = () => (
    <div className="header">
        <div className="header__textbox">
            <h1 className="header__textbox__heading">Bring everyone together to build better projects.</h1>
            <p className="header__textbox__subheading">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <Button color='orange' text='Get Started' />
        </div>
        <div className="header__image__container">
            <img src={heroImage} alt="Graphs" />
        </div>
    </div>
)

export default Header