import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard';
import LogIn from './components/auth/LogIn';
import CreateEvent from './components/events/CreateEvent';
import EventDetail from './components/dashboard/EventDetail';
import Home from './components/Home';
import { connect } from 'react-redux';
import AttendingEvents from './components/events/AttendingEvents';

import './Base.css';

class App extends Component {
  render() {
    // const { auth } = this.props;
    // console.log(this.props);

    // if (!auth.uid) {
    //   return <Redirect to="/sign-in" />;
    // }
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
              <Route path="/attending" component={AttendingEvents} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
