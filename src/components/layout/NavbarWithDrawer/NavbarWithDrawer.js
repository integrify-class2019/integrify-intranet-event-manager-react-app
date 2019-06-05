import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from '../Drawer/DrawerToggleButton';
import Drawer from '../Drawer/Drawer';
import Backdrop from '../Backdrop/Backdrop';

import HeaderLogo from '../../../assets/images/header-logo.svg';

import './NavbarWithDrawer.css';

class NavbarWithDrawer extends Component {
    state = {
        isDrawerOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(prevState => ({ isDrawerOpen: !prevState.isDrawerOpen }));
    };

    handleBackdropClick = () => {
        this.setState({
            isDrawerOpen: false,
        });
    };

    render() {
        let backdrop;

        if (this.state.isDrawerOpen) {
            backdrop = <Backdrop handleBackdropClick={this.handleBackdropClick} />;
        }
        return (
            <>
                <header className="navbar">
                    <nav className="navbar-navigation container">
                        <NavLink to="/dashboard" className="logo" style={{ cursor: 'pointer' }}>
                            <img src={HeaderLogo} alt="logo" className="header-logo" />
                        </NavLink>
                        <div className="page-name">
                            <h1 style={{ fontSize: '2.5rem' }}>{this.props.pageName}</h1>
                        </div>
                        <div className="spacer" />
                        <div>
                            <DrawerToggleButton handleDrawerToggle={this.handleDrawerToggle} />
                        </div>
                    </nav>
                </header>
                <Drawer
                    show={this.state.isDrawerOpen}
                    handleBackdropClick={this.handleBackdropClick}
                    handleDrawerToggle={this.handleDrawerToggle}
                />
                {backdrop}
            </>
        );
    }
}

export default NavbarWithDrawer;
