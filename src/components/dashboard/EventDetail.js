import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class EventDetail extends Component {
    render() {
        const { id } = this.props.match.params;
        console.log(this.props);
        const { event } = this.props;
        if (event) {
            return (
                <div>
                    <h2>{event.eventName}</h2>
                    <h2>{event.name}</h2>
                </div>
            );
        }
        return <h1>Lodaing...</h1>;

        // const { event } = this.props;
        // const { name, type, id } = event;
        // const { name, participant, time, type, id } = event;
        return (
            <h2>detail {id} </h2>
            // <div className={`event-card event-${type}`} key={id}>
            //     <div className="event-header">
            //         <h2 className="event-title">{name}</h2>
            //         <div className="progress">
            //             {/* Participant:{participant.in.length}/{participant.total} */}
            //         </div>
            //     </div>

            //     <div className="event-actions">
            //         <div className="thumbs-up">
            //             <span> svg👍</span>
            //             <span className="in">IN</span>
            //         </div>
            //         <div className="thumbs-down">
            //             <span> svg👎</span>
            //             <span className="out">OUT</span>
            //         </div>
            //     </div>

            //     <div className="event-details">
            //         <div className="date-time">
            //             <h3 className="date">{/* <span>{time.day}</span>{' '} */}</h3>

            //             <h3 className="time">{/* {time.hourBegin} - {time.hourEnd}{' '} */}</h3>
            //         </div>
            //         <img src="" alt="" className="location" />
            //     </div>
            // </div>
        );
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'events' }])
)(EventDetail);
