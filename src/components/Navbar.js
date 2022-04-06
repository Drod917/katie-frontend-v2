import React from 'react';
import { useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '../content/images/menu.svg';
import useSmoothScrollTo from '../utils/useSmoothScrollTo';
import useWindowOnScroll from '../utils/useWindowOnScroll';

import './Navbar.scss';

const Navbar = () => {
    const handleScrollToTop = useSmoothScrollTo(0);

    const [menuExpanded, setExpanded] = useState(false);
    const toggleMenu = useCallback(() => {
        setExpanded(!menuExpanded);
    }, [menuExpanded])
    const closeMenu = useCallback(() => {
        setExpanded(false);
    }, [])

    const handleBrandClick = useCallback(() => {
        closeMenu();
        handleScrollToTop();
      }, [closeMenu, handleScrollToTop]);

    const [shrink, setShrink] = useState(false);
    const handleWindowScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setShrink(scrollTop > 1);
    }, []);
    useWindowOnScroll(handleWindowScroll);
    
    return (
        <div className={shrink ? "nav-bg scroll-shrink bg-white" : 'nav-bg scroll-expand'}>
            <header className='navbar'>
                <button href="#" onClick={handleBrandClick}>KBHair</button>
                <MenuIcon className="menu" onClick={toggleMenu} />

                <nav className={menuExpanded ? 'open-nav' : null}>
                    <svg className="close-button" viewBox="0 0 1024 1024"
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                        onClick={toggleMenu}
                        >
                        <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM677.4 682.2L611.4 681.9L512 563.4L412.7 681.8L346.6 682.1C342.2 682.1 338.6 678.6 338.6 674.1C338.6 672.2 339.3 670.4 340.5 668.9L470.6 513.9L340.5 359C339.292 357.534 338.621 355.699 338.6 353.8C338.6 349.4 342.2 345.8 346.6 345.8L412.7 346.1L512 464.6L611.3 346.2L677.3 345.9C681.7 345.9 685.3 349.4 685.3 353.9C685.3 355.8 684.6 357.6 683.4 359.1L553.5 514L683.5 669C684.7 670.5 685.4 672.3 685.4 674.2C685.4 678.6 681.8 682.2 677.4 682.2Z" fill="black"/>
                    </svg>
                        
                    <ul>
                        {/* eslint-disable */}
                        <li>
                            <Link 
                                smooth="easeInOutQuart" 
                                to="/services"
                                offset={-265}
                                onClick={closeMenu}>
                                    Services
                            </Link>
                        </li>
                        <li>
                            <Link 
                                smooth="easeInOutQuart" 
                                to="/about"
                                offset={-100}
                                onClick={closeMenu}>
                                    About Me
                            </Link>
                        </li>
                        <li>
                            <Link 
                                smooth="easeInOutQuart" 
                                to="/shop"
                                offset={-100}
                                onClick={closeMenu}>
                                    Shop
                            </Link>
                        </li>
                        <li>
                            <Link 
                                smooth="easeInOutQuart" 
                                to="/contact"
                                offset={-50}
                                onClick={closeMenu}>
                                    Contact
                            </Link>
                        </li>
                        {/* esline-enable */}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;