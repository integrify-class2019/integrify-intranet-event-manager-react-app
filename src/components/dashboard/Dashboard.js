import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { events } from '../../data';
import '../../Dashboard.css';

import EventDashboard from './EventDashboard';

export default class Dashboard extends Component {
    state = {
        events: [],
        typeInput: { Sport: false, Meetup: false, Party: false, Presentation: false, Other: false },
        search: '',
    };

    componentDidMount() {
        this.setState({
            events,
        });
    }

    showInputChange = typeInput => {
        // / show all if all is false
        if (Object.values(typeInput).filter(item => item == true).length === 0) {
            this.setState({
                events,
            });
            return;
        }

        const newEvents = events.filter(event => {
            if (typeInput[event.type] === true) {
                return event;
            }
        });
        this.setState({
            events: newEvents,
        });
    };

    handleInputChange = event => {
        const { name, type, value } = event.target;
        if (type === 'checkbox') {
            const typeInput = { ...this.state.typeInput };
            typeInput[name] = !typeInput[name];
            this.showInputChange(typeInput);
            this.setState({
                typeInput,
            });
        } else {
            this.setState({
                [name]: value,
            });
        }
    };

    render() {
        const { events, typeInput } = this.state;

        const renderEvents = events.map(event => <EventDashboard key={event.id} event={event} />);

        const renderType = Object.keys(typeInput).map(typeItem => (
            <div className="input-type" key={typeItem}>
                <input
                    type="checkbox"
                    id={typeItem}
                    name={typeItem}
                    checked={typeInput[typeItem]}
                    onChange={this.handleInputChange}
                />
                <label htmlFor={typeItem}>{typeItem}</label>
            </div>
        ));

        return (
            <div className="Dashboard">
                <section className="search-box-add">
                    <form action="" className="search-form">
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="search-input"
                        />
                        {renderType}
                    </form>
                    <div className="add-btn">
                        <img src="./assets/images/add-btn.svg" alt="" />
                    </div>
                </section>
                <NavLink exact to="/create-event" className="Dashboard-CreateEvent">
                    create event (temporary)
                </NavLink>
                <section className="events-section">
                    <div className="events">{renderEvents}</div>
                </section>
            </div>
        );
    }
}
