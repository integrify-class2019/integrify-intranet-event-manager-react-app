import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './routes/SignUpForm';
import SignInForm from './routes/SignInForm';
import '../../css/LogIn.css';
import { connect } from 'react-redux';

class LogIn extends Component {
    render() {
        return (
            <Router>
                <div className="LogIn">
                    <div className="LogIn-Aside">
                        <div>
                            <h1>Integrify Logo or design</h1>
                            <h2>Integrify Event Planner!</h2>
                        </div>
                    </div>

                    <div className="LogIn-Form">
                        <div className="PageSwitcher">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="PageSwitcher-Item-Active"
                                className="PageSwitcher-Item"
                            >
                                Sign In
                            </NavLink>

                            <NavLink
                                exact
                                to="/sign-up"
                                activeClassName="PageSwitcher-Item-Active"
                                className="PageSwitcher-Item"
                            >
                                Sign Up
                            </NavLink>
                        </div>

                        <div className="FormTitle">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="FormTitle-Link-Active"
                                className="FormTitle-Link"
                            >
                                Sign In
                            </NavLink>{' '}
                            or{' '}
                            <NavLink
                                exact
                                to="/sign-up"
                                activeClassName="FormTitle-Link-Active"
                                className="FormTitle-Link"
                            >
                                Sign Up
                            </NavLink>
                        </div>

                        <Route path="/sign-up" component={SignUpForm} />

                        <Route exact path="/" component={SignInForm} />
                    </div>
                </div>
            </Router>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {};
};

export default connect(mapStateToProps)(LogIn);
