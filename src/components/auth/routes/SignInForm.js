import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
  state = { email: '', password: '' };

  handleChange = e => {
    let { value, name, type, checked } = e.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  };
  handleSubmit = e => {
    e.preventDefault();

    // this is where we can send the data to the server for Sign UP or Sign In

    console.log('the form was submitted with the following data:');
    console.log(this.state);
  };

  render() {
    return (
      <div className='FormCenter'>
        <form className='FormFields' onSubmit={this.handleSubmit}>
          <div className='FormField'>
            <label className='FormField-Label' htmlFor='email'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              value={this.state.email}
              className='FormField-Input'
              placeholder='Enter your email'
              name='email'
              onChange={this.handleChange}
            />
          </div>

          <div className='FormField'>
            <label className='FormField-Label' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={this.state.password}
              className='FormField-Input'
              placeholder='Enter your Password'
              name='password'
              onChange={this.handleChange}
            />
          </div>

          <div className='FormField'>
            <button className='FormField-Button mr-20'>Sign In</button>{' '}
            <Link to='/' className='FormField-Link'>
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
