import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { eventsData } from '../../data';

import '../../css/Dashboard.css';

import EventDashboard from './EventDashboard';

import AddBtn from '../../assets/images/add-btn.svg';

class Dashboard extends Component {
  state = {
    events: [],
    typeInput: { Sport: false, Meetup: false, Party: false, Presentation: false, Other: false },
    searchTerm: ''
  };

  componentDidMount() {
    this.setState({
      events: eventsData
    });
  }

  showInputChange = typeInput => {
    // / show all if all is false
    if (Object.values(typeInput).filter(item => item == true).length === 0) {
      this.setState({
        events: eventsData
      });
      return eventsData;
    }

    const newEvents = eventsData.filter(event => {
      if (typeInput[event.type] === true) {
        return event;
      }
    });
    this.setState({
      events: newEvents
    });
    return newEvents;
  };

  showSearchTermChange = searchTerm => {
    const eventsBefore = this.showInputChange(this.state.typeInput);
    const newEvents = eventsBefore.filter(event => {
      if (event.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return event;
      }
    });
    this.setState({
      events: newEvents
    });
  };

  handleInputChange = event => {
    const { name, type, value } = event.target;
    if (type === 'checkbox') {
      const typeInput = { ...this.state.typeInput };
      typeInput[name] = !typeInput[name];
      this.showInputChange(typeInput);
      this.setState({
        typeInput
      });
    } else {
      this.setState({
        [name]: value
      });

      if (name === 'searchTerm') {
        this.showSearchTermChange(value);
      }
    }
  };

  render() {
    const { events, typeInput, searchTerm } = this.state;

    const renderEvents = events.map(event => <EventDashboard key={event.id} event={event} />);

    const renderType = Object.keys(typeInput).map(typeItem => (
      <div className="input-type" key={typeItem}>
        <input
          type="checkbox"
          id={typeItem}
          name={typeItem}
          checked={typeInput[typeItem]}
          onChange={this.handleInputChange}
        />
        <label htmlFor={typeItem}>{typeItem}</label>
      </div>
    ));

    return (
      <div className="Dashboard">
        <section className="search-box-add">
          <form action="" className="search-form">
            <input
              type="text"
              placeholder="Search events..."
              className="search-input"
              value={searchTerm}
              name="searchTerm"
              onChange={this.handleInputChange}
            />
            {renderType}
          </form>
          <NavLink exact to="/create-event" className="add-btn">
            <img src={AddBtn} alt="add button" />
          </NavLink>
        </section>

        <section className="events-section">
          <div className="events">{renderEvents}</div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
