import React, { Component } from 'react';
import ThumbsUp from '../../assets/images/thumbsup.svg';
import ThumbsDown from '../../assets/images/thumbsdown.svg';

export default class EventDashboard extends Component {
  render() {
    const { event } = this.props;
    const { name, participant, time, type, id } = event;
    return (
      <div className={`event-card event-${type}`} key={id}>
        <div className="event-header">
          <h2 className="event-title">{name}</h2>
          <div className="progress">
            Participant:{participant.in.length}/{participant.total}
          </div>
        </div>

        <div className="event-actions">
          <button className="thumbs-up">
            <img src={ThumbsUp} alt="thumbs up" class="up" />
            <span className="in">IN</span>
          </button>
          <button className="thumbs-down">
          <img src={ThumbsDown} alt="thumbs up" class="down" />
            <span className="out">OUT</span>
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
