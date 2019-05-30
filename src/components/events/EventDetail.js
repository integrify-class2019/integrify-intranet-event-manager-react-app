import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class EventDetail extends Component {
    render() {
        // const { id } = this.props.match.params;
        console.log(this.props);
        const { event } = this.props;
        if (event) {
            return (
                <div>
                    <h1>Name: {event.name}</h1>
                    <h2>Description: {event.description}</h2>
                    <h2>Location: {event.location}</h2>
                    <h2>Author: {event.authorName}</h2>
                    <h2>Day: {event.time.day}</h2>
                    <h2>Time: {event.time.hourBegin}</h2>
                </div>
            );
        }
        return <h1>Loading...</h1>;
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);

    const { id } = ownProps.match.params;
    // eslint-disable-next-line prefer-destructuring
    const { events } = state.firestore.data;
    const event = events ? events[id] : null;
    return {
        event
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'events' }])
)(EventDetail);
