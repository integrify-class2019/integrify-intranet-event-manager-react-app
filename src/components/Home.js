import React from 'react';
import '../Base.css';
import { connect } from 'react-redux';
import LogIn from './auth/LogIn';
import Dashboard from './dashboard/Dashboard';

const App = props => {
    const { auth } = props;
    const showHome = auth.uid ? <Dashboard /> : <LogIn />;
    return (
        <div className="App">
            <div className="mobile-wrapper">{showHome}</div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);

    return {
        auth: state.firebase.auth,
    };
};

export default connect(mapStateToProps)(App);
