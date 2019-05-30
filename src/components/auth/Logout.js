import React from 'react';
import '../../css/Base.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOut } from '../../store/actions/authAction';
// import LogIn from './auth/LogIn';
// import Dashboard from './dashboard/Dashboard';

const Logout = props => {
    const { auth } = props;
    if (auth.uid) {
        props.signOut();
        return <Redirect to="/" />;
    }
};

const mapStateToProps = state => {
    console.log(state);

    return {
        auth: state.firebase.auth,
    };
};
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);
