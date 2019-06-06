import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/authAction';

const initialState = {
    email: '',
    password: '',
    name: '',
    hasAgreed: false,
    nameError: '',
    emailError: '',
    passwordError: '',
    hasAgreedError: ''
};
// let pattern = ^[\w]{2,9}\.[\w]{2,9}\@integrify\.io$
let pattern = /^[A-Za-z]{2,9}\.[A-Za-z]{2,9}@integrify\.io$/;

class SignUpForm extends Component {
    state = initialState;

    handleChange = e => {
        const { value, name, type, checked } = e.target;
        type === 'checkbox'
            ? this.setState({
                  [name]: checked
              })
            : this.setState({
                  [name]: value
              });
    };

    validate = () => {
        let nameError = '';
        let emailError = '';
        let passwordError = '';
        let hasAgreedError = '';

        if (!this.state.name) {
            nameError = 'name field cannot be empty ';
        } else if (this.state.name.length < 2) {
            nameError = 'name must be minimum of 2 characters';
        }
        console.log(pattern.test(this.state.email));
        if (!this.state.email) {
            emailError = 'email field cannot be empty';
        } else if (!pattern.test(this.state.email)) {
            emailError = 'email must be a valid Integrify email';
        }
        if (this.state.password.length < 6) {
            passwordError = 'password must be minimum of 6 characters';
        }
        if (!this.state.hasAgreed) {
            hasAgreedError = 'please accept the terms of service to use the App';
        }
        if (nameError || emailError || passwordError) {
            this.setState({ nameError, emailError, passwordError, hasAgreedError });
            return false;
        }
        return true;
    };

    handleSubmit = e => {
        e.preventDefault();

        // this is where we can send the data to the server for Sign UP or Sign In

        console.log('the form was submitted with the following data:');
        console.log(this.state);

        const isValid = this.validate();
        if (isValid) {
            // clear the form
            this.setState(initialState);
            this.props.signUp(this.state);
        }
    };

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {
            console.log(auth.uid);

            window.location.href = 'http://localhost:3000/';
        }
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField-Label" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={this.state.name}
                            className="FormField-Input"
                            placeholder="Enter your Name"
                            name="name"
                            onChange={this.handleChange}
                        />
                        <div style={{ color: 'red', fontSize: '1.2rem' }}>{this.state.nameError}</div>
                    </div>

                    <div className="FormField">
                        <label className="FormField-Label" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={this.state.email}
                            className="FormField-Input"
                            placeholder="firstname.lastname@integrify.io"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <div style={{ color: 'red', fontSize: '1.2rem' }}>{this.state.emailError}</div>
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
                        <div style={{ color: 'red', fontSize: '1.2rem' }}>{this.state.passwordError}</div>
                    </div>

                    <div className="FormField">
                        <label className="FormField-CheckboxLabel">
                            <input
                                type="checkbox"
                                value={this.state.hasAgreed}
                                className="FormField-Checkbox"
                                name="hasAgreed"
                                onChange={this.handleChange}
                            />
                            I agree all statement in
                            <a href="" className="FormField-TermsLink">
                                terms of service
                            </a>
                        </label>
                        <div style={{ color: 'red', fontSize: '1.2rem' }}>{this.state.hasAgreedError}</div>
                    </div>

                    <div className="FormField">
                        <div className="center red-text">{authError ? <p>{authError}</p> : null}</div>
                        <button className="FormField-Button mr-20">Sign Up</button>{' '}
                        <Link to="/" className="FormField-Link">
                            I am already a member
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    authError: state.auth.authError
});

const mapDispatchToProps = dispatch => ({
    signUp: creds => dispatch(signUp(creds))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm);
