import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { inEvent, outEvent } from '../../store/actions/eventActions';

import NavbarWithDrawer from '../layout/NavbarWithDrawer/NavbarWithDrawer';
import Loading from '../layout/Loading';

import '../../css/EventDetail.css';

library.add(faThumbsUp, faThumbsDown);

class EventDetail extends Component {
    enrollAction = (type, eventId) => {
        console.log(type, eventId);

        if (type === 'in') {
            this.props.inEvent(eventId);
        }

        if (type === 'out') {
            this.props.outEvent(eventId);
        }
    };

    checkIn = () => {
        const { event } = this.props;
        const userId = this.props.auth.uid;
        const { in: eventIn } = event.participant;
        if (eventIn.includes(userId)) {
            return 'btn-in-active';
        }
        return '';
    };

    checkOut = () => {
        const { event } = this.props;
        const userId = this.props.auth.uid;
        const { out: eventOut } = event.participant;

        if (eventOut.includes(userId)) {
            return 'btn-out-active';
        }
        return '';
    };

    render() {
        // const { id } = this.props.match.params;
        console.log(this.props);
        let eventParticipantsNames = '';

        const { event, usersInfo } = this.props;
        if (event) {
            const id = this.props.eventId;
            const { name, description, participant, time, location, type } = event;
            console.log('usersInfo:', usersInfo, ' ', 'participant in:', participant.in, ' ');

            if (usersInfo) {
                const eventParticipants = usersInfo.filter(user =>
                    // console.log(user);
                    participant.in.includes(user.id)
                );

                console.log(eventParticipants);

                eventParticipantsNames = eventParticipants.map((participant, i) => (
                    <p key={participant.name + i}>{participant.name}</p>
                ));

                console.log(eventParticipantsNames);
            }
            console.log(eventParticipantsNames);

            return (
                <>
                    <NavbarWithDrawer pageName="Event Info" />
                    <main className="event-info-page">
                        <div className={`event-hero event-${type}`}>
                            <h2 className="event-title">{name}</h2>
                        </div>
                        <small className="event-category">
                            Event category: <span>{type}</span>
                        </small>

                        <div className="event-actions">
                            <div className="enroll-buttons">
                                <button
                                    type="button"
                                    id={id}
                                    name="clickIn"
                                    className={`btn-enroll btn-in ${this.checkIn()}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        this.enrollAction('in', id);
                                    }}
                                >
                                    <FontAwesomeIcon icon="thumbs-up" />
                                    &nbsp;IN&nbsp;
                                </button>
                                <button
                                    type="button"
                                    name="clickOut"
                                    id={id}
                                    className={`btn-enroll btn-out ${this.checkOut()}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        this.enrollAction('out', id);
                                    }}
                                >
                                    <FontAwesomeIcon icon="thumbs-down" />
                                    <i className="icon icon-thumbs-down" />
                                    &nbsp;OUT
                                </button>
                            </div>
                        </div>

                        <div className="event-details-card container">
                            <div className="event-description event-info">
                                <h2>Event description</h2>
                                <p>{description}</p>
                            </div>

                            <div className="event-location event-info">
                                <h2>Event location</h2>
                                <p>{location}</p>
                            </div>

                            <div className="event-date event-info">
                                <h2>Date</h2>
                                <p>{time.day}</p>
                            </div>

                            <div className="event-timing event-info">
                                <h2>Time</h2>
                                <p>{time.hourBegin} - </p>
                            </div>

                            <div className="event-participants event-info">
                                <h2>Participants</h2>
                                <div>
                                    <p>{eventParticipantsNames}</p>
                                </div>
                            </div>

                            <div className="event-more-info event-info">
                                <h2>More Info</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto molestias quos
                                    odio? Ducimus natus nisi fugiat, laborum iure in illo?
                                </p>
                            </div>
                        </div>
                    </main>
                </>
            );
        }
        // return <h1>Loading...</h1>;
        return <Loading />;
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);

    const usersInfo = state.firestore.ordered.users;
    // console.log(usersInfo)

    const { id } = ownProps.match.params;
    // eslint-disable-next-line prefer-destructuring
    const { events } = state.firestore.data;
    const event = events ? events[id] : null;
    return {
        event,
        usersInfo,
        eventId: id,
        auth: state.firebase.auth
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
    firestoreConnect([{ collection: 'events' }, { collection: 'users' }])
)(EventDetail);
