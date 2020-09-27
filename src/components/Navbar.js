import React from 'react';
import { Button, Links } from './';
import companyLogo from '../images/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={companyLogo} alt="Manage company logo" />
            <div className="navbar__links">
                <Links />
            </div>
            <Button color='orange' text='Get started' />
        </nav> 
    )
}

export default Navbar