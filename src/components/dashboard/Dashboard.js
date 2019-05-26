import React, { Component } from 'react';
import Switch from 'react-switch';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { eventsData } from '../../data';
import '../../Dashboard.css';

import EventDashboard from './EventDashboard';

export default class Dashboard extends Component {
    state = {
        events: [],
        typeInput: { Sport: false, Meetup: false, Party: false, Presentation: false, Other: false },
        searchTerm: '',
        checked: false,
    };

    componentDidMount() {
        this.setState({
            events: eventsData,
        });
    }

    showInputChange = typeInput => {
        // / show all if all is false
        if (Object.values(typeInput).filter(item => item === true).length === 0) {
            this.setState({
                events: eventsData,
            });
            return eventsData;
        }

        const newEvents = eventsData.filter(event => {
            if (typeInput[event.type] === true) {
                return event;
            }
        });
        this.setState({
            events: newEvents,
        });
        return newEvents;
    };

    showSearchTermChange = searchTerm => {
        const eventsBefore = this.showInputChange(this.state.typeInput);
        const newEvents = eventsBefore.filter(event => {
            if (event.name.toLowerCase().includes(searchTerm.toLowerCase())) {
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

            if (name === 'searchTerm') {
                this.showSearchTermChange(value);
            }
        }
    };

    // handleSwitchChange = checked => {
    //     this.setState({ checked });
    // };

    render() {
        const { events, typeInput, searchTerm, checked } = this.state;

        const renderEvents = events.map(event => <EventDashboard key={event.id} event={event} />);

        const renderType = Object.keys(typeInput).map(typeItem => (
            <>
                <input
                    type="checkbox"
                    id={typeItem}
                    name={typeItem}
                    checked={typeInput[typeItem]}
                    onChange={this.handleInputChange}
                />
                <label htmlFor={typeItem}>{typeItem}</label>
            </>
        ));

        return (
            <div className="Dashboard">
                <section className="search-box-add">
                    <form action="" className="search-form">
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="search-input"
                            value={searchTerm}
                            name="searchTerm"
                            onChange={this.handleInputChange}
                        />
                        <div className="search-checkboxes">{renderType}</div>
                    </form>
                    <div className="add-btn">
                        <img src="./assets/images/add-btn.svg" alt="" />
                    </div>
                    <NavLink exact to="/create-event" className="Dashboard-CreateEvent">
                        create event (temporary)
                    </NavLink>
                </section>
                <section className="events-section">
                    <div className="events">{renderEvents}</div>
                </section>
            </div>
        );
    }
}
