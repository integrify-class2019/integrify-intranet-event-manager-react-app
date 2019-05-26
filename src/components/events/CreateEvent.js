import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Navbar from '../layout/Navbar';

import '../../css/CreateEvent.css';

export default class CreateEvent extends Component {
  state = {
    eventName: '',
    eventDescription: '',
    eventType: '',
    eventLocation: '',
    date: new Date()
  };

  handleDate = date => {
    this.setState({ date });
    console.log(this.state);
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // this is where we can send the data to the server for Sign UP or Sign In

    console.log('the event created with the following data:');
    console.log(this.state);
  };

  render() {
    const { eventName, eventDescription, eventType, eventLocation, date } = this.state;
    return (
      <div className="CreateEvent">
        {/* <NavBar pageName={this.props.pageName} isOpen={this.props.isOpen} handleOpen={this.props.handleOpen} /> */}
        <Navbar pageName={this.props.pageName} isOpen={this.props.isOpen} handleOpen={this.props.handleOpen}/>
        <div className="CreateEvent-title">
          <h1>Create Event</h1>
          <div>Menu</div>
        </div>
        <div className="CreateEvent-Form">
          <form className="FormFields">
            <div className="FormField">
              <label className="FormField-Label" htmlFor="eventName">
                Name
              </label>
              <input
                type="text"
                id="eventName"
                value={eventName}
                className="FormField-Input"
                placeholder="Name of your event"
                name="eventName"
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField-Label" htmlFor="eventDescription">
                Description
              </label>
              <input
                type="text"
                id="eventDescription"
                value={eventDescription}
                className="FormField-Input"
                placeholder="What are you organising?"
                name="eventDescription"
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="FormField">
              <label className="FormField-Label" htmlFor="eventType">
                Type of Event
              </label>
              <select value={eventType} name="eventType" onChange={this.handleChange} required>
                <option value="">-- Select your Event --</option>
                <option value="type1">type1</option>
                <option value="type2">type2</option>
                <option value="type3">type3</option>
                <option value="type4">type4</option>
              </select>
            </div>

            <div className="FormField">
              <label className="FormField-Label" htmlFor="eventLocation">
                Location
              </label>
              <input
                type="text"
                id="eventLocation"
                value={eventLocation}
                className="FormField-Input"
                placeholder="Place, room, or address"
                name="eventLocation"
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField-Label" htmlFor="eventDate">
                Date:
              </label>
              <DateTimePicker
                disableClock
                type="date"
                className="FormField-Calendar"
                name="date"
                id="eventDate"
                onChange={this.handleDate}
                value={date}
              />
            </div>

            <div className="FormField">
              <button type="submit" className="FormField-Button" onClick={this.handleSubmit}>
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
