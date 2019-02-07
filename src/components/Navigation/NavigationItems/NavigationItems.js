import React from 'react';
import './NavgationItems.css'
import NavigationItem from "./NavigationItem/NavigationItem";


const NavigationItems = () => (
        <ul className='NavigationItems'>
            <NavigationItem to="/pages/home">Home</NavigationItem>
            <NavigationItem to="/pages/about">About</NavigationItem>
            <NavigationItem to="/pages/contacts">Contacts</NavigationItem>
            <NavigationItem to="/pages/divisions" >Divisions</NavigationItem>
            <NavigationItem to={'/pages/admin'} exact>Admin</NavigationItem>
        </ul>
    );
export default NavigationItems;