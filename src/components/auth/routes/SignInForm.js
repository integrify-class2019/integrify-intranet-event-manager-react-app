/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions/authAction';

class SignInForm extends Component {
    state = { email: '', password: '' };

    handleChange = e => {
        const { value, name, type, checked } = e.target;

        // eslint-disable-next-line prettier/prettier
        type === 'checkbox' 
        ? this.setState({ [name]: checked }) 
        : this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        // this is where we can send the data to the server for Sign UP or Sign In

        console.log('the form was submitted with the following data:');
        console.log(this.state);
        this.props.signIn(this.state);
    };

    render() {
        const { authError } = this.props;
        console.log(authError);

        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField-Label" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={this.state.email}
                            className="FormField-Input"
                            placeholder="Enter your email"
                            name="email"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="FormField">
                        <label className="FormField-Label" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}
                            className="FormField-Input"
                            placeholder="Enter your Password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="FormField">
                        <div className="red-text">{authError ? <p>{authError}</p> : null}</div>
                        <button className="FormField-Button mr-20">Sign In</button>
                        <Link to="/" className="FormField-Link">
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
    signIn: creds => dispatch(signIn(creds)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);
