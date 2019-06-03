import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class EventForm extends Component {
    state = {
        name: '',
        description: '',
        type: '',
        location: '',
        date: new Date(),
        time: {},
    };

    componentDidMount() {
        const { event } = this.props;
        const { name, description, type, location, date, time } = event;
        console.log(this.props.event.date);

        this.setState({
            name,
            description,
            type,
            location,
            date: new Date(this.props.event.date.seconds * 1000),
            time,
        });
    }

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

    render() {
        const { name, description, type, location, date, time } = this.state;
        return (
            <>
                <div>
                    <h1>Name: {name}</h1>
                    <h2>Description: {description}</h2>
                    <h2>Location: {location}</h2>
                    <h2>Type of event: {type}</h2>
                    <h2>Day: {time.day}</h2>
                    <h2>Time: {time.hourBegin}</h2>
                </div>
                <form>
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
                        onChange={this.handleDate}
                        value={date}
                    />
                    <button type="submit" onClick={e => this.props.onHandleSubmit(e, this.state)}>
                        SAVE
                    </button>
                </form>
            </>
        );
    }
}
export default EventForm;
