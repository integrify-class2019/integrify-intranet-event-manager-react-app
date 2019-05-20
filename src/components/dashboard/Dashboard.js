import React, { Component } from 'react';
import { events } from '../../data';
import EventDashboard from './EventDashboard';

export class Dashboard extends Component {
    state = {
        events: [],
    };

    componentDidMount() {
        this.setState({
            events,
        });
    }

    render() {
        const renderEvents = this.state.events.map(event => (
            <EventDashboard key={event.id} event={event} />
        ));

        return <div>{renderEvents}</div>;
    }
}

export default Dashboard;
