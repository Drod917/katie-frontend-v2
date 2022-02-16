import React from 'react';
import Navbar from './Navbar';

import './Layout.scss';

const Layout = ({ children }) => {

    return (
        <div class="layout">
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout;