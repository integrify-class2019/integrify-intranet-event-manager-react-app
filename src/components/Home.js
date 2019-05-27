import React from 'react';
import '../Base.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import LogIn from './auth/LogIn';
// import Dashboard from './dashboard/Dashboard';

const App = props => {
    const { auth } = props;
    if (auth.uid) {
        return <Redirect to="/dashboard" />;
    }
    return <Redirect to="/sign-in" />;
};

const mapStateToProps = state => {
    console.log(state);

    return {
        auth: state.firebase.auth,
    };
};

export default connect(mapStateToProps)(App);
