import React from 'react';
import { Button, Links } from './';
import companyLogo from '../images/logo.svg';

const Navbar = () => {
    return (
        <div>
            <img className="navbar__logo" src={companyLogo} alt="company logo" onClick={closeAll} />
            <div className="navbar__links">
                <Links/>
            </div>
            <Button/>
        </div>
        
    )
}

export default Navbar