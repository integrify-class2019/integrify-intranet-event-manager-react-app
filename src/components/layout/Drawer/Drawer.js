import React from 'react';
import { NavLink } from 'react-router-dom';

import './Drawer.css';

import HamburgerMenu from '../../../assets/images/menu bar.svg';

const Drawer = ({ show, handleBackdropClick }) => {
    return (
        <nav className={show ? 'drawer open' : 'drawer'}>
            <header className="navbar">
                <nav className="navbar-navigation container">
                    <button className="menu-btn" onClick={handleBackdropClick}>
                        <img src={HamburgerMenu} alt="menu bar" />
                    </button>
                </nav>
            </header>

            <ul className="nav-links-drawer">
                <li>
                    <NavLink to="/dashboard" onClick={handleBackdropClick}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/create-event" onClick={handleBackdropClick}>
                        Create Event
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-events" onClick={handleBackdropClick}>
                        My Events
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/attending" onClick={handleBackdropClick}>
                        Attending
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/log-out" onClick={handleBackdropClick}>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Drawer;
