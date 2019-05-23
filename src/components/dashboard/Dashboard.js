import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { events } from '../../data';
import '../../Dashboard.css';

import EventDashboard from './EventDashboard';

export default class Dashboard extends Component {
    state = { events: [] };

    componentDidMount() {
        this.setState({
            events,
        });
    }

    render() {
        const renderEvents = this.state.events.map(event => (
            <EventDashboard key={event.id} event={event} />
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
                        <input type="checkbox" id="sport" />
                        <label htmlFor="">Sport</label>
                        <input type="checkbox" id="meetup" />
                        <label htmlFor="">Meet up</label>
                        <input type="checkbox" id="party" />
                        <label htmlFor="">Party</label>
                        <input type="checkbox" id="presentation" />
                        <label htmlFor="">Presentation</label>
                        <input type="checkbox" id="other" />
                        <label htmlFor="">Other</label>
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
