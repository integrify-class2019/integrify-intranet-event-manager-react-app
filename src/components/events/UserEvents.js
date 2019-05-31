import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import UserEventCard from './UserEventCard';
import NavbarWithDrawer from '../layout/NavbarWithDrawer/NavbarWithDrawer';
import { deleteEvent } from '../../store/actions/eventActions';

// import '../../css/Attending.css';

// let eventInitial = [...eventsData];
const eventInitial = [];

class UserEvents extends Component {
    deleteAction = id => {
        console.log('deleted');

        this.props.deleteEvent(id);
    };

    render() {
        console.log(this.props.auth);
        console.log(this.props.userEvents);

        const events = this.props.userEvents;

        const userId = this.props.auth.uid;

        const eventsFilter =
            events &&
            events.filter(event => {
                if (event.authorId === userId) {
                    return event;
                }
            });

        const renderUserEvents =
            eventsFilter &&
            eventsFilter.map(event => (
                <UserEventCard
                    key={event.id}
                    event={event}
                    history={this.props.history}
                    deleteAction={this.deleteAction}
                />
            ));

        return (
            <>
                <NavbarWithDrawer pageName="My Events" />
                <main>
                    <section className="user-events-section">
                        <div className="user-events container">{renderUserEvents}</div>
                    </section>
                </main>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteEvent: event => dispatch(deleteEvent(event)),
});

const mapStateToProps = state => {
    const { events } = state.firestore.ordered;
    return {
        userEvents: events,
        auth: state.firebase.auth,
    };
};
export default compose(
    connect(
        mapStateToProps,

        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'events' }])
)(UserEvents);
