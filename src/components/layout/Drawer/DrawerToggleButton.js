import React from 'react';
import HamburgerMenu from '../../../assets/images/menu bar.svg';

import './DrawerToggleButton.css';

const DrawerToggleButton = ({ handleDrawerToggle}) => {
    return (
        <button className="menu-btn" onClick={handleDrawerToggle}>
            <img src={HamburgerMenu} alt="menu bar" />
        </button>
    );
};

export default DrawerToggleButton;
