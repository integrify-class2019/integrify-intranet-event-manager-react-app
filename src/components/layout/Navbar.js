import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../Navbar.css';

import HeaderLogo from '../../assets/images/header-logo.svg';
import MenuIcon from '../../assets/images/menu bar.svg';

const NavBar = ({ isOpen, handleOpen }) => {
    const pageName = window.location.pathname.slice(1);

    return (
        <header className="main-header">
            <div className="container header-nav">
                <a href="#" className="logo">
                    <img src={HeaderLogo} alt="logo" className="header-logo" />
                    <h1>{pageName}</h1>
                </a>

                <button className="menu-bar" onClick={() => handleOpen()}>
                    <img src={MenuIcon} alt="menu bar" />
                </button>

                <nav className={isOpen ? 'open' : ''}>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/dashboard" onClick={handleOpen}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="create-event" onClick={handleOpen}>
                                Create Event
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-events/" onClick={handleOpen}>
                                My Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/attending" onClick={handleOpen}>
                                Attending
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="log-out" onClick={handleOpen}>
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
