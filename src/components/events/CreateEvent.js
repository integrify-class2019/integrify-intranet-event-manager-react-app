import React, { Component } from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';

import '../../CreateEvent.css';

export default class CreateEvent extends Component {
  state = {
    date: new Date(),
    time: '10:00'
  };

  onChange = (date, time) => {
    console.log(this.state);

    this.setState({ date });
    this.setState({ time });
  };

  render() {
    return (
      <div className='CreateEvent'>
        <div className='CreateEvent-title'>
          <h1>Create Event</h1>
          <div>Menu</div>
        </div>
        <div className='CreateEvent-Form'>
          <form className='FormFields'>
            <div className='FormField'>
              <label className='FormField-Label' htmlFor='eventName'>
                Name
              </label>
              <input
                type='text'
                id='eventName'
                value=''
                className='FormField-Input'
                placeholder='Name of your event'
                name='eventName'
                onChange=''
              />
            </div>

            <div className='FormField'>
              <label className='FormField-Label' htmlFor='eventDescription'>
                Description
              </label>
              <input
                type='text'
                id='eventDescription'
                value=''
                className='FormField-Input'
                placeholder='what are you organising?'
                name='eventDescription'
                onChange=''
              />
            </div>

            <div className='FormField'>
              <label className='FormField-Label' htmlFor='eventType'>
                Type of Event
              </label>
              <select value='' name='eventType' onChange=''>
                <option value=''>-- Select your Event --</option>
                <option value='type1'>type1</option>
                <option value='type2'>type2</option>
                <option value='type3'>type3</option>
                <option value='type4'>type4</option>
              </select>
            </div>

            <div className='FormField'>
              <label className='FormField-Label' htmlFor='eventLocation'>
                Location
              </label>
              <input
                type='text'
                id='eventLocation'
                value=''
                className='FormField-Input'
                placeholder='Place, room, or address'
                name='eventLocation'
                onChange=''
              />
            </div>

            <div className='FormField'>
              <label className='FormField-Label' htmlFor='eventDate'>
                Date
              </label>
              <Calendar
                className='FormField-Calendar'
                id='eventDate'
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>

            <div className='FormField'>
              <label className='FormField-Label' htmlFor='eventTime'>
                Time
              </label>
              <TimePicker onChange={this.onChange} value={this.state.time} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
