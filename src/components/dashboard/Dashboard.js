import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Switch from 'react-switch';
import { eventsData } from '../../data';
import '../../Dashboard.css';
import EventDashboard from './EventDashboard';

// let eventInitial = [...eventsData];
let eventInitial = [];
class Dashboard extends Component {
    state = {
        events: [],
        typeInput: { Sport: false, Meetup: false, Party: false, Presentation: false, Other: false },
        searchTerm: '',
        checked: false,
    };

    componentDidMount() {
        // const { eventsJS } = this.props;
        // console.log(eventsData);

        this.setState({
            events: eventInitial,
        });
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

    updateEventFromJB = () => {
        const { eventsJS } = this.props;
        console.log(eventsJS);

        if (eventsJS) {
            // console.log('update events');
            // console.log(eventsJS[0].participant);
            // console.log(eventInitial.includes(eventsJS[0]));

            if (!eventInitial.includes(eventsJS[0])) {
                eventInitial = [...eventInitial, ...eventsJS];
                this.setState({
                    events: eventInitial,
                });
                console.log(eventInitial);
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

    render() {
        const { events, typeInput, searchTerm, checked } = this.state;

        const { auth } = this.props;

        // if (!auth.uid) {
        //     return <Redirect to="/sign-in" />;
        // }
        // update data form firebase
        this.updateEventFromJB();
        const renderEvents =
            events &&
            events.map(event => (
                <Link to={`/event/${event.id}`}>
                    <EventDashboard key={event.id} event={event} />{' '}
                </Link>
            ));

        const renderType = Object.keys(typeInput).map(typeItem => (
            <div className="search-switch">
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

const mapStateToProps = state => {
    // console.log(state);
    const { events } = state.firestore.ordered;
    return {
        eventsJS: events,
        auth: state.firebase.auth,
    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'events' }])
)(Dashboard);
