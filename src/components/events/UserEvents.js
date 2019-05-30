import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import UserEventCard from './UserEventCard';

// import '../../css/Attending.css';

// let eventInitial = [...eventsData];
const eventInitial = [];

class UserEvents extends Component {
    render() {
        console.log(this.props.auth);
        console.log(this.props.userEvents);

        const events = this.props.userEvents;
        const { auth } = this.props;
        const renderUserEvents =
            events && events.map(event => <UserEventCard key={event.id} event={event} />);

        return (
            <main>
                <section className="user-events-section">
                    <div className="user-events container">{renderUserEvents}</div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    const { events } = state.firestore.ordered;
    return {
        userEvents: events,
        auth: state.firebase.auth,
    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'events' }])
)(UserEvents);
