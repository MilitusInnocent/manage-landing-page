import React, { useRef, useState } from 'react';
import { Button, Links } from './';
import logoWhite from '../images/footer-logo.svg';

const Footer = () => {
    const [validEmail, setValidEmail] = useState(true);
    const formEl = useRef();

    const checkEmail = (e) => {
        let input = formEl.current.children[0].value,
            errorMsg = formEl.current.children[2];

        e.preventDefault();
    
        if (input === '') {
            setValidEmail(false)
            errorMsg.innerText = `Email cannot be empty`
        } else if (!validateEmail(input)) {
            setValidEmail(false)
            errorMsg.innerText = `Please insert a valid email`
        } else {
            setValidEmail(true)
            formEl.current.reset()
        }

        function validateEmail(email) {
            let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return validEmail.test(String(email).toLowerCase());
        }
    }

    return (
        <div className="footer">
            <img className="footer__logo" src={logoWhite} alt="Manage company logo" />

            <div className="footer__social__logos">
                <a href="#" aria-label="Facebook icon">
                    <i className="fab fa-facebook-square" />
                </a>
                <a href="#" aria-label="YouTube icon">
                    <i className="fab fa-youtube-square" />
                </a>
                <a href="#" aria-label="Twitter icon">
                    <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Pinterest icon">
                    <i className="fab fa-pinterest" />
                </a>
                <a href="#" aria-label="Instagram icon">
                    <i className="fab fa-instagram" />
                </a>
            </div>

            <div className="footer__links">
                <Links />
            </div>

            <form className={`footer__form${validEmail ? '' : ' invalid'}`} ref={formEl} onSubmit={checkEmail} onFocus={() => setValidEmail(true)}>
                <input
                    className="footer__form__input"
                    placeholder="Updates in your inbox..."
                    aria-label="Enter valid email address here"
                    type="email"
                />
                <Button color='orange' text='Go' type="submit" />
                <small className="footer__form__error" />
            </form>

            <small className="footer__copyright">Copyright 2020. All Rights Reserved</small>
        </div>
    )
}

export default Footer;