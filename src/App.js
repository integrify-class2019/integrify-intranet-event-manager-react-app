import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/Dashboard';
import LogIn from './components/auth/LogIn';
import CreateEvent from './components/events/CreateEvent';

import './Base.css';
import EventDetail from './components/dashboard/EventDetail';
import Home from './components/Home';
import NavBar from './components/layout/Navbar';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="mobile-wrapper">
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/dashboard" component={DashBoard} />
                            <Route exact path="/sign-in" component={LogIn} />
                            <Route exact path="/create-event" component={CreateEvent} />
                            <Route path="/event/:id" component={EventDetail} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
