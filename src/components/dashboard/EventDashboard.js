import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

library.add(faThumbsUp, faThumbsDown);

export default class EventDashboard extends Component {
    checkIn = () => {
        const { event, userId } = this.props;
        const { in: eventIn } = event.participant;
        if (eventIn.includes(userId)) {
            return 'btn-in-active';
        }
        return '';
    };

    checkOut = () => {
        const { event, userId } = this.props;
        const { out: eventOut } = event.participant;

        if (eventOut.includes(userId)) {
            return 'btn-out-active';
        }
        return '';
    };

    handleEnroll = e => {
        const eventId = e.target.id;

        switch (e.target.name) {
            case 'clickIn':
                this.props.enrollAction('in', eventId);
                break;
            case 'clickOut':
                this.props.enrollAction('out', eventId);
                break;
            default:
                break;
        }
    };

    clickEventDetail = () => {
        console.log(this.props);
        // return <Redirect to={`'/event/' ${this.props.event.id} `} />;
        this.props.history.push(`/event/${this.props.event.id}`);
    };

    render() {
        const { event } = this.props;

        // console.log(event);

        const { name, participant, time, location, type, id } = event;
        const value = participant.in.length === 0 ? '0' : participant.in.length;
        return (
            <div className={`event-card event-${type}`} key={id}>
                <div className="event-header" onClick={this.clickEventDetail}>
                    <h2 className="event-title">{name}</h2>
                    <div className="progress">
                        <CircularProgressbar
                            value={participant.in.length}
                            maxValue={20}
                            text={value}
                            background="true"
                            styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: 'green',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: 'lightgray',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: 'black',
                                    // Text size
                                    fontSize: '3rem',
                                    fontWeight: 'bolder',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: 'white',
                                },
                            }}
                        />{' '}
                    </div>
                </div>

                <div className="enroll-buttons">
                    <button
                        type="button"
                        id={id}
                        name="clickIn"
                        className={`btn-enroll btn-in ${this.checkIn()}`}
                        style={{ cursor: 'pointer' }}
                        onClick={this.handleEnroll}
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
                        onClick={this.handleEnroll}
                    >
                        <FontAwesomeIcon icon="thumbs-down" />
                        <i className="icon icon-thumbs-down" />
                        &nbsp;OUT
                    </button>
                </div>

                <div className="event-details">
                    <div className="date-time">
                        <h3 className="date">
                            <span>{time.day}</span>{' '}
                        </h3>

                        <h3 className="time">
                            {time.hourBegin} - {time.hourEnd}{' '}
                        </h3>
                    </div>
                    <h3 className="location">{location}</h3>
                    {/* <img src="" alt="" className="location" /> */}
                </div>
            </div>
        );
    }
}
