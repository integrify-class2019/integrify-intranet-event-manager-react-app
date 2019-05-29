import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../css/Navbar.css';

import HeaderLogo from '../../assets/images/header-logo.svg';
import MenuIcon from '../../assets/images/menu bar.svg';

class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
    console.log(this.state.isOpen);

    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const path = window.location.pathname;
    const capitalInitial = path.slice(1, 2).toUpperCase();
    const restLetters = path.slice(2);
    const pageName =
      path.slice(1) === 'log-out'
        ? `${capitalInitial}${restLetters}`.replace('-', '')
        : `${capitalInitial}${restLetters}`.replace('-', ' ');

    if (window.location.pathname === '/sign-in' || window.location.pathname === '/sign-up') {
      return <></>;
    }

    return (
      <header className="main-header">
        <div className="container header-nav">
          <NavLink to="/dashboard" className="logo">
            <img src={HeaderLogo} alt="logo" className="header-logo" />
            <h1>{pageName}</h1>
          </NavLink>

          <button className="menu-bar" onClick={this.handleOpen} type="button">
            <img src={MenuIcon} alt="menu bar" />
          </button>

          <nav className={this.state.isOpen ? 'open' : ''}>
            <ul className="nav-links">
              <li>
                <NavLink to="/dashboard" onClick={this.handleOpen}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/create-event" onClick={this.handleOpen}>
                  Create Event
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-events" onClick={this.handleOpen}>
                  My Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/attending" onClick={this.handleOpen}>
                  Attending
                </NavLink>
              </li>
              <li>
                <NavLink to="/log-out" onClick={this.handleOpen}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
