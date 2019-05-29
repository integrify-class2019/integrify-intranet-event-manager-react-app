import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

library.add(faThumbsUp, faThumbsDown);

export default class EventDashboard extends Component {
    state = {
        eventIn: [],
        eventOut: [],
    };

    // for getting the user's enrollments

    handleEnroll = e => {
        const { eventIn, eventOut } = this.state;
        if (e.target.classList.contains('btn-in')) {
            eventOut.map(el => {
                if (el === e.target.id) {
                    const newEventOut = eventIn.filter(event => event !== el);

                    this.setState({ eventOut: newEventOut });
                }
            });
            this.setState({ eventIn: [...eventIn, e.target.id] }, () => {
                console.log('in', this.state.eventIn);
            });
        }
        if (e.target.classList.contains('btn-out')) {
            eventIn.map(el => {
                if (el === e.target.id) {
                    const newEventIn = eventIn.filter(event => event !== el);

                    this.setState({ eventIn: newEventIn });
                }
            });
            this.setState({ eventOut: [...eventOut, e.target.id] }, () => {
                console.log('out', this.state.eventOut);
            });
        }

        switch (e.target.className) {
            case 'btn-enroll btn-in':
                const outBtn =
                    e.target.parentElement.querySelector('.btn-out-active') ||
                    e.target.parentElement.querySelector('.btn-out');
                outBtn.className = 'btn-enroll btn-out';
                e.target.className = 'btn-enroll btn-in-active';

                break;
            case 'btn-enroll btn-out':
                const inBtn =
                    e.target.parentElement.querySelector('.btn-in-active') ||
                    e.target.parentElement.querySelector('.btn-in');
                inBtn.className = 'btn-enroll btn-in';
                e.target.className = 'btn-enroll btn-out-active';
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
        console.log(this.state);

        console.log(event.participant);

        const { name, participant, time, type, id } = event;
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
                        className="btn-enroll btn-in"
                        style={{ cursor: 'pointer' }}
                        onClick={this.handleEnroll}
                    >
                        <FontAwesomeIcon icon="thumbs-up" />
                        &nbsp;IN&nbsp;
                    </button>
                    <button
                        type="button"
                        id={id}
                        className="btn-enroll btn-out"
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
                    <img src="" alt="" className="location" />
                </div>
            </div>
        );
    }
}

//   <div class="event-card event-1">
//     <div class="event-header">
//       <h2 class="event-title">Summer Picnic, 2019</h2>
//       <div class="progress">
//         <img src="https://quickchart.io/chart?c={
//                   type:'radialGauge',
//                   data:{
//                     datasets:[{data:[30],backgroundColor:'green'}]
//                   }
//                 }">
//       </div>
//     </div>

//     <div class="event-actions">
//       <a class="thumbs-up" href="#">
//         <img src="./assets/images/thumbsup.svg" alt="thumbs up" class="up">
//         <span class="in">IN</span>
//       </a>
//       <a class="thumbs-down" href="#">
//         <img src="./assets/images/thumbsdown.svg" alt="thumbs down" class="down">
//         <span class="out">OUT</span>
//       </a>

//     </div>

//     <div class="event-details">
//       <div class="date-time">
//         <h3><span class="date">20</span> May</h3>
//         <h3 class="time">16:00 - 19.30</h3>
//       </div>
//       <img src="./assets/images/location.svg" alt="" class="location">
//     </div>
//   </div>
