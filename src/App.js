import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/Dashboard';
import LogIn from './components/auth/LogIn';
import CreateEvent from './components/events/CreateEvent';
// import './Base.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="mobile-wrapper">
                    <Switch>
                        <Route exact path="/sign-in" component={LogIn} />
                        <Route exact path="/dashboard" component={DashBoard} />
                        <Route exact path="/create-event" component={CreateEvent} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
