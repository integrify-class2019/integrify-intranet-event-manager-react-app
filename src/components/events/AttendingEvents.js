import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Switch from 'react-switch';

import EventCardAttending from './EventCardAttending';

import '../../css/Attending.css';
import NavbarWithDrawer from '../layout/NavbarWithDrawer/NavbarWithDrawer';

// let eventInitial = [...eventsData];
const eventInitial = [];

class AttendingEvents extends Component {
    state = {
        events: [],
        clicked: false,
    };
    // componentDidUpdate() {
    //   // console.log(eventInitial);
    //   this.updateEventFromDB();
    //   // console.log(this.props);
    // }

    // updateEventFromDB = () => {
    //   const { eventsFB } = this.props;
    //   // console.log(eventsJS);

    //   if (eventsFB.length > 0) {
    //     this.setState({
    //       events: eventsFB
    //     });
    //   }
    // };

    render() {
        console.log(this.props.eventsFB);

        const { clicked } = this.state;
        const events = this.props.eventsFB;
        const { auth } = this.props;
        console.log(this.props);
        console.log(this.state.events);
        const renderAttendingEvents =
            events && events.map(event => <EventCardAttending key={event.id} event={event} />);

        return (
            <>
                <NavbarWithDrawer pageName="Attending" />
                <main>
                    <section className="attending-events-section">
                        <div className="attending-events container">{renderAttendingEvents}</div>
                    </section>
                </main>
            </>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    const { events } = state.firestore.ordered;
    return {
        eventsFB: events,
        auth: state.firebase.auth,
    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'events' }])
)(AttendingEvents);
