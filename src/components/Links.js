import React from 'react';

const Links = () => {
    const links = ['Home', 'Pricing', 'Products', 'About Us', 'Careers', 'Community', 'Privacy Policy'];

    return (
        <ul className="links__list">
             {links.map((link, i) => (
                <li className="link" key={i}>
                    <a href='#'>
                        {link}
                    </a>
                </li> 
            ))}
        </ul>
    )
}

export default Links