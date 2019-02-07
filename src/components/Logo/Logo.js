import React from 'react';
import './Logo.css'
import logo from '../../assets/image/logo.png'

const Logo = () => {
    return (
        <div className='Logo'>
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default Logo;