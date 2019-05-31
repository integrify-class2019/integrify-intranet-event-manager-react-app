import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase';

import { compose } from 'redux';

import Switch from 'react-switch';

import { inEvent, outEvent } from '../../store/actions/eventActions';

// import { eventsData } from '../../data';

import '../../css/Dashboard.css';

import EventDashboard from './EventDashboard';
import NavbarWithDrawer from '../layout/NavbarWithDrawer/NavbarWithDrawer';

// let eventInitial = [...eventsData];

const eventInitial = [];

class Dashboard extends Component {
    state = {
        // events: [],

        typeInput: { Sport: false, Meetup: false, Party: false, Presentation: false, Other: false },

        searchTerm: ''

        // checked: false,

        // enrollments: [],
    };

    handleSearchChange = event => {
        const { name, type, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    // filter by search and event type

    filterEvent = () => {
        const { eventsFB } = this.props;

        const { typeInput, searchTerm } = this.state;

        console.log(eventsFB);

        if (eventsFB) {
            let eventFilter = [];

            if (Object.values(typeInput).filter(item => item === true).length === 0) {
                eventFilter = eventsFB;
            } else {
                const typeFilter = eventsFB.filter(event => {
                    if (typeInput[event.type] === true) {
                        return event;
                    }
                });

                eventFilter = typeFilter;
            }

            eventFilter = eventFilter.filter(event => {
                if (event.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return event;
                }
            });

            return eventFilter;
        }
    };

    // for the switch library

    handleSwitchChange = (checked, event, id) => {
        console.log(id);

        const typeInput = { ...this.state.typeInput };

        typeInput[id] = !typeInput[id];

        this.setState({
            typeInput
        });
    };

    enrollAction = (type, eventId) => {
        console.log(type, eventId);

        if (type === 'in') {
            this.props.inEvent(eventId);
        }

        if (type === 'out') {
            this.props.outEvent(eventId);
        }
    };

    render() {
        const { typeInput, searchTerm } = this.state;

        const { auth } = this.props;

        const eventFilter = this.filterEvent();

        const renderEvents =
            eventFilter &&
            eventFilter.map(event => (
                <EventDashboard
                    key={event.id}
                    event={event}
                    history={this.props.history}
                    enrollAction={this.enrollAction}
                    userId={auth.uid}
                />
            ));

        const renderType = Object.keys(typeInput).map(typeItem => (
            <div className="search-switch" key={typeItem}>
                <Switch
                    type="checkbox"
                    id={typeItem}
                    name={typeItem}
                    checked={typeInput[typeItem]}
                    // checked={this.state.checked}

                    // onChange={this.handleInputChange}

                    onChange={this.handleSwitchChange}
                    onColor="#f3cf74"
                    onHandleColor="#ffb600"
                    handleDiameter={25}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={40}
                    className="react-switch"

                    // id="material-switch"
                />

                <label htmlFor={typeItem}>{typeItem}</label>
            </div>
        ));

        return (
            <>
                <NavbarWithDrawer pageName="Dashboard" />
                <main>
                    <div className="Dashboard">
                        <section className="search-box-add">
                            <div style={{ color: 'black' }}>Hi {this.props.profile.name} </div>

                            <form action="" className="search-form">
                                <input
                                    type="text"
                                    placeholder="Search events..."
                                    className="search-input"
                                    value={searchTerm}
                                    name="searchTerm"
                                    onChange={this.handleSearchChange}
                                />

                                <div className="search-checkboxes">{renderType}</div>
                            </form>

                            <NavLink exact to="/create-event" className="Dashboard-CreateEvent" />
                        </section>

                        <section className="events-section">
                            <div className="events">{renderEvents}</div>
                        </section>
                    </div>
                </main>
            </>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);

    const { events } = state.firestore.ordered;

    return {
        eventsJS: events,

        eventsFB: events,

        auth: state.firebase.auth,

        profile: state.firebase.profile
    };
};

const mapDispatchToProps = dispatch => ({
    inEvent: eventId => dispatch(inEvent(eventId)),

    outEvent: eventId => dispatch(outEvent(eventId))
});

export default compose(
    connect(
        mapStateToProps,

        mapDispatchToProps
    ),

    firestoreConnect([{ collection: 'events' }])
)(Dashboard);
