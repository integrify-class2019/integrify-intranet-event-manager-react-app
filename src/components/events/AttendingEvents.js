import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Attending.css';
import EventCardAttending from './EventCardAttending';

// let eventInitial = [...eventsData];
let eventInitial = [];

class AttendingEvents extends Component {
  state = {
    events: [],
    clicked: false
  };
  componentDidUpdate() {
    // console.log(eventInitial);
    this.updateEventFromDB();
  }

  updateEventFromDB = () => {
    const { eventsJS } = this.props;
    // console.log(eventsJS);

    if (eventsJS) {
      // console.log('update events');
      // console.log(eventsJS[0].participant);
      // console.log(eventInitial.includes(eventsJS[0]));

      if (eventInitial.length === 0) {
        eventInitial = [...eventsJS];
        this.setState({
          events: eventInitial
        });
        // console.log(eventInitial);
      }
    }
  };

  render() {
    console.log(this.props.eventsJS);

    const { events, clicked } = this.state;

    const { auth } = this.props;
    // console.log(this.props);
    console.log(this.state.events);
    const renderAttendingEvents = events && events.map(event => <EventCardAttending key={event.id} event={event} />);

    return (
      <main>
        <section class="events-section">
          <div class="events container">{renderAttendingEvents}</div>
        </section>
      </main>
    );
  }
}

const mapStatesToProps = state => {
  console.log(state);
  const { events } = state.firestore.ordered;
  return {
    eventsJS: events,
    auth: state.firebase.auth
  };
};

export default connect(mapStatesToProps)(AttendingEvents);
