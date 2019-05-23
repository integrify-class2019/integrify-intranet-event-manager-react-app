import React, { Component } from 'react';

export default class EventDashboard extends Component {
    render() {
        const { event } = this.props;
        const { name, participant, time, type } = event;
        return (
            <div>
                <h1>{name}</h1>
                <h2>
                    Participant:{participant.in.length}/{participant.total}
                </h2>
                <h3>Day: {time.day}</h3>
                <h3>
                    Time: {time.hourBegin} -{time.hourEnd}{' '}
                </h3>
            </div>
        );
    }
}
