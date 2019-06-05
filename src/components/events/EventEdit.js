import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import NavbarWithDrawer from '../layout/NavbarWithDrawer/NavbarWithDrawer';
import { editEvent } from '../../store/actions/eventActions';
import EditForm from './EditForm';

class EventEdit extends Component {
    handleSubmit = (e, event) => {
        e.preventDefault();
        console.log(event);
        const { id: eventId } = this.props.match.params;
        const { date } = event;
        const months = [
            'Jan',
            'Feb',
            'March',
            'April',
            'May',
            'June',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        event.time = { day: `${day} ${months[month]}`, hourBegin: `${hour}: ${minute}` };
        this.props.editEvent(eventId, event);
        this.props.history.push('/my-events');
    };

    render() {
        console.log(this.props);
        const { event } = this.props;
        const { id } = this.props.match.params;

        if (event) {
            return (
                <>
                    <NavbarWithDrawer pageName="Edit" />
                    <main>
                        <EditForm event={event} id={id} onHandleSubmit={this.handleSubmit} />
                    </main>
                </>
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
        event,
    };
};

const mapDispatchToProps = dispatch => ({
    editEvent: (eventId, event) => dispatch(editEvent(eventId, event)),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'events' }])
)(EventEdit);
