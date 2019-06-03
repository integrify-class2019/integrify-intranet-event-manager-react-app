import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../css/UserEvent.css';

class UserEventCard extends Component {
    state = {
        isdeleted: false,
        isedited: false,
        deletedId: [],
    };

    handleDelete = e => {
        const { isdeleted } = this.state;
        const { id } = this.props.event;

        this.props.deleteAction(id);
        // this.props.(this.state);        console.log('event id:', this.props.event.id);
    };

    clickEventEdit = () => {
        console.log(this.props);

        // return <Redirect to={`'/event/' ${this.props.event.id} `} />;
        this.props.history.push(`/event/edit/${this.props.event.id}`);
    };

    render() {
        const { event } = this.props;
        const { name, participant, time, location, type, id } = event;
        const value = participant.in.length === 0 ? '0' : participant.in.length;
        return (
            // <NavLink to = {filteredEventids}
            <div className="user-event-card" key={id}>
                <div className={`user-event-info event-${type}`}>
                    <div className="event-header">
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
                            />
                        </div>
                    </div>

                    <div className="event-details">
                        <div className="date-time">
                            <h3 className="date">
                                <span>{time.day}</span>{' '}
                            </h3>

                            <h3 className="time">{time.hourBegin}</h3>
                        </div>
                        <h3 className="location-user">{location}</h3>
                    </div>
                </div>

                <div className="edit-delete-btns">
                    <button type="button" className="btn-edit" onClick={this.clickEventEdit}>
                        Edit
                    </button>
                    <button type="button" className=" btn-delete" onClick={this.handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        );
        // </NavLink>
    }
}

export default UserEventCard;
