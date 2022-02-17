import React from 'react';
import MenuIcon from '../content/images/menu.svg';

import './Navbar.scss';

const Navbar = () => {

    return (
        <header className='nav'>
            <h1>KBHair</h1>
            <MenuIcon />
        </header>
    )
}

export default Navbar;