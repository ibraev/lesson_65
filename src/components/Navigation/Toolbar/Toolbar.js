import React from 'react';
import Logo from "../../Logo/Logo";
import './Toolbar.css'
import NavigationItems from "../NavigationItems/NavigationItems";


const Toolbar = () => (
       <header className='header'>
           <div className="container">
               <Logo/>
               <nav>
                   <NavigationItems/>
               </nav>
           </div>

       </header>
    );

export default Toolbar;