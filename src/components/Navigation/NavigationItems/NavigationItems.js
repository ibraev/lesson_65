import React from 'react';
import './NavgationItems.css'
import NavigationItem from "./NavigationItem/NavigationItem";


const NavigationItems = () => (
        <ul className='NavigationItems'>
            <NavigationItem to="/">Home</NavigationItem>
            <NavigationItem to="/add">Add</NavigationItem>
        </ul>

    );


export default NavigationItems;