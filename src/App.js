import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/Dashboard';
import LogIn from './components/auth/LogIn';
import CreateEvent from './components/events/CreateEvent';
import './css/Base.css';
import NavBar from './components/layout/Navbar';
import EventDashboard from './components/dashboard/EventDashboard';

class App extends Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
     <BrowserRouter>       
          <div className="mobile-wrapper">
            {/* <NavBar pageName="Dashboard" handleOpen={this.handleOpen} isOpen={this.state.isOpen} /> */}
            <DashBoard pageName="Dashboard" handleOpen={this.handleOpen} isOpen={this.state.isOpen} />
            <CreateEvent pageName="CreateEvent" handleOpen={this.handleOpen} isOpen={this.state.isOpen} />

            <Switch>
              <Route exact path="/dashboard" component={DashBoard} />
              <Route exact path="/sign-in" component={LogIn} />
              <Route exact path="/create-event" component={CreateEvent} />
            </Switch>
          </div>
      </BrowserRouter> 
    );
  }
}

export default App;
