import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { events } from '../../data';

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
                <div className="Dashboard-title" />
                <div className="Dashboard-main">
                    <div className="Dashboard-Search">
                        <input
                            type="text"
                            className="Dashboard-Input"
                            id="searchbar"
                            name="searchbar"
                            placeholder="search an event"
                        />
                    </div>
                    <NavLink exact to="/create-event" className="Dashboard-CreateEvent">
                        create event (temporary)
                    </NavLink>
                    <div className="Dashboard-Events">{renderEvents}</div>
                </div>
            </div>
        );
    }
}
