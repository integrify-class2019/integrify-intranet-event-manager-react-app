import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Switch from 'react-switch';
import { joinEvent } from '../../store/actions/eventActions';
// import { eventsData } from '../../data';
import '../../css/Dashboard.css';

import EventDashboard from './EventDashboard';

// let eventInitial = [...eventsData];
let eventInitial = [];
class Dashboard extends Component {
    state = {
        events: [],
        typeInput: { Sport: false, Meetup: false, Party: false, Presentation: false, Other: false },
        searchTerm: '',
        checked: false,
        enrollments: [],
    };

    componentWillMount() {
        // for when you come back from NavBar it can show every page
        const { eventsJS } = this.props;
        // console.log(eventsJS);
        if (eventsJS) {
            eventInitial = [...eventsJS];
            this.setState({
                events: eventInitial,
            });
        }
    }

    componentDidUpdate() {
        // console.log(eventInitial);
        this.updateEventFromDB();
    }

    showInputChange = typeInput => {
        // / show all if all is false
        if (Object.values(typeInput).filter(item => item === true).length === 0) {
            this.setState({
                events: eventInitial,
            });
            return eventInitial;
        }

        const newEvents = eventInitial.filter(event => {
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

    handleSearchChange = event => {
        const { name, type, value } = event.target;

        this.setState({
            [name]: value,
        });

        if (name === 'searchTerm') {
            this.showSearchTermChange(value);
        }
    };

    updateEventFromDB = () => {
        const { eventsJS } = this.props;
        // console.log(eventsJS);

        if (eventsJS) {
            // console.log('update events');
            // console.log(eventsJS[0].participant);
            // console.log(eventInitial.includes(eventsJS[0]));

            if (eventInitial.length == 0) {
                eventInitial = [...eventsJS];
                this.setState({
                    events: eventInitial,
                });
                // console.log(eventInitial);
            }
        }
    };

    // for the switch library

    handleSwitchChange = (checked, event, id) => {
        console.log(id);

        // const { name, type, value } = event.target;

        const typeInput = { ...this.state.typeInput };
        typeInput[id] = !typeInput[id];
        this.showInputChange(typeInput);
        this.setState({
            typeInput,
        });

        this.setState({ checked });
    };

    enrollData = (eventId, data) => {
        console.log(eventId, data);
        this.props.joinEvent(eventId, data);
    };

    render() {
        const { events, typeInput, searchTerm, checked } = this.state;

        const { auth } = this.props;
        console.log(this.props);

        const renderEvents =
            events &&
            events.map(event => (
                <EventDashboard
                    key={event.id}
                    event={event}
                    history={this.props.history}
                    enrollData={this.enrollData}
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
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    const { events } = state.firestore.ordered;
    return {
        eventsJS: events,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

const mapDispatchToProps = dispatch => ({
    joinEvent: (eventId, data) => dispatch(joinEvent(eventId, data)),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'events' }])
)(Dashboard);
