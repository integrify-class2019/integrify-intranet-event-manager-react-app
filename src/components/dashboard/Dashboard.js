import React, { Component } from 'react';
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
                    <div className="Dashboard-Search" />
                    <button className="Dashboard-CreateEvent" />
                    <div className="Dashboard-Events">{renderEvents}</div>
                </div>
            </div>
        );
    }
}
