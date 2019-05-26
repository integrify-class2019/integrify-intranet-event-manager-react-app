import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import '../../css/Navbar.css';

import HeaderLogo from '../../assets/images/header-logo.svg';
import MenuIcon from '../../assets/images/menu bar.svg';


const NavBar = ({ pageName, isOpen, handleOpen }) => {
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
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="create-event">Create Event</NavLink>
              </li>
              <li>
                <NavLink to="/my-events/">My Events</NavLink>
              </li>
              <li>
                <NavLink to="/attending">Attending</NavLink>
              </li>
              <li>
                <NavLink to="log-out">Logout</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
     
  );
};

export default NavBar;
