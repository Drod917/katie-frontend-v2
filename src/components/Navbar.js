import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './Navbar.scss';

const Navbar = () => {

    return (
        <header className='nav'>
            <h1>Navbar</h1>
            <StaticImage src="../content/images/menu.svg" alt="menu"/>

        </header>
    )
}

export default Navbar;