import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import DateTimePicker from 'react-datetime-picker';
import NavbarWithDrawer from '../layout/NavbarWithDrawer/NavbarWithDrawer';

class EventEdit extends Component {
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

                // need to create the editEvent action

                // this.props.editEvent(this.state);
            }
        );
    };

    render() {
        console.log(this.props);
        const { id } = this.props.match.params;
        const { name, description, type, location, date, time } = this.state;
        const { event } = this.props;
        if (event) {
            return (
                <>
                    <NavbarWithDrawer pageName="Edit" />
                    <main>
                        <div>
                            <h1>Name: {event.name}</h1>
                            <h2>Description: {event.description}</h2>
                            <h2>Location: {event.location}</h2>
                            <h2>Type of event: {event.type}</h2>
                            <h2>Day: {event.time.day}</h2>
                            <h2>Time: {event.time.hourBegin}</h2>
                        </div>
                        <form onSubmit="">
                            <input
                                placeholder={name}
                                name="name"
                                type="text"
                                value={name}
                                onChange={this.handleChange}
                            />
                            <input
                                placeholder={description}
                                name="description"
                                type="text"
                                value={description}
                                onChange={this.handleChange}
                            />
                            <input
                                placeholder={location}
                                name="location"
                                type="text"
                                value={location}
                                onChange={this.handleChange}
                            />
                            <select value={type} name="type" onChange={this.handleChange} required>
                                <option value="Other">-- Select your Event --</option>
                                <option value="Sport">Sport</option>
                                <option value="Meetup">Meetup</option>
                                <option value="Party">Party</option>
                                <option value="Presentation">Presentation</option>
                                <option value="Other">Other</option>
                            </select>
                            <DateTimePicker
                                disableClock
                                clearIcon={null}
                                format="dd-MM-y HH:mm"
                                type="date"
                                className="FormField-Calendar"
                                name="date"
                                id="eventDate"
                                onChange=""
                                value={event.time}
                            />
                            <button type="submit">SAVE</button>
                        </form>
                    </main>
                </>
            );
        }
        return <h1>Loading...</h1>;
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);

    const { id } = ownProps.match.params;
    // eslint-disable-next-line prefer-destructuring
    const { events } = state.firestore.data;
    const event = events ? events[id] : null;
    return {
        event,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'events' }])
)(EventEdit);
