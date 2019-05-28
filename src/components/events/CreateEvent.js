import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { connect } from 'react-redux';
import { createEvent } from '../../store/actions/eventActions';

import '../../CreateEvent.css';

class CreateEvent extends Component {
    state = {
        name: '',
        description: '',
        type: '',
        location: '',
        date: new Date(),
        time: {},
    };

    handleDate = date => {
        this.setState(
            {
                date,
            },
            () => {
                console.log(this.state);
            }
        );
    };

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { date } = this.state;
        const months = [
            'Jan',
            'Feb',
            'March',
            'April',
            'May',
            'June',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        console.log(`${day} ${months[month]}`, `${hour}: ${minute}`);

        this.setState(
            {
                time: { day: `${day} ${months[month]}`, hourBegin: `${hour}: ${minute}` },
            },
            () => {
                console.log('the event created with the following data:');
                console.log(this.state);
                this.props.createEvent(this.state);
            }
        );

        // this.props.history.push('/');
    };

    render() {
        const { eventName, eventDescription, eventType, eventLocation, date } = this.state;
        return (
            <div className="CreateEvent">
                {/* <div className="CreateEvent-title">
                    <h1>Create Event</h1>
                    <div>Menu</div>
                </div> */}
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
                                name="name"
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
                                name="description"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="FormField">
                            <label className="FormField-Label" htmlFor="eventType">
                                Type of Event
                            </label>
                            <select
                                value={eventType}
                                name="type"
                                onChange={this.handleChange}
                                required
                            >
                                <option value="">-- Select your Event --</option>
                                <option value="Sport">Sport</option>
                                <option value="Meetup">Meetup</option>
                                <option value="Party">Party</option>
                                <option value="Presentation">Presentation</option>
                                <option value="type4">Other</option>
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
                                name="location"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="FormField">
                            <label className="FormField-Label" htmlFor="eventDate">
                                Date:
                            </label>
                            <DateTimePicker
                                disableClock
                                clearIcon={null}
                                format="dd-MM-y HH:mm"
                                type="date"
                                className="FormField-Calendar"
                                name="date"
                                id="eventDate"
                                onChange={this.handleDate}
                                value={date}
                            />
                        </div>

                        <div className="FormField">
                            <button
                                type="submit"
                                className="FormField-Button"
                                onClick={this.handleSubmit}
                            >
                                Create Event
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createEvent: event => dispatch(createEvent(event)),
});

export default connect(
    null,
    mapDispatchToProps
)(CreateEvent);
