import React, { Component } from 'react';

export default class Dashboard extends Component {
    state = { events: [] };

    componentDidMount() {
        this.setState({ events: '' });
    }

    render() {
        return (
            <div className="Dashboard">
                <div className="Dashboard-title" />
                <div className="Dashboard-main">
                    <div className="Dashboard-Search" />
                    <button className="Dashboard-CreateEvent" />
                    <div className="Dashboard-Events">{}</div>
                </div>
            </div>
        );
    }
}
