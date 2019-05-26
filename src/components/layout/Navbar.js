import React from 'react';
// import '../../css/Navbar.css';
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

        <a href="#" className="menu-bar" onClick={() => handleOpen()}>
          <img src={MenuIcon} alt="menu bar" />
        </a>

        <nav className={isOpen ? 'open' : ''}>
          <ul className="nav-links">
            <li>
              <a href="../index.html">Dashboard</a>
            </li>
            <li>
              <a href="./create-event.html">Create Event</a>
            </li>
            <li>
              <a href="./my-events.html">My Events</a>
            </li>
            <li>
              <a href="./attending-events.html">Attending</a>
            </li>
            <li>
              <a href="./login.html">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
