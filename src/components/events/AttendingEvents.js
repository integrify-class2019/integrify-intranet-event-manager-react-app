import React from 'react';

const AttendingEvents = () => {
  return (
    <main>
      <section class="events-section">
        <div class="events container">
          <div class="event-card event-1">
            <div class="event-header">
              <h2 class="event-title">Summer Picnic, 2019</h2>
              <div class="progress">
                <img
                  src="https://quickchart.io/chart?c={
                      type:'radialGauge',
                      data:{
                        datasets:[{data:[30],backgroundColor:'green'}]
                      }  
                    }"
                />
              </div>
            </div>

            <div class="event-details">
              <div class="date-time">
                <h3>
                  <span class="date">20</span> May
                </h3>
                <h3 class="time">16:00 - 19.30</h3>
              </div>
              <img src="../assets/images/location.svg" alt="" class="location" />
            </div>
          </div>

          <div class="event-card event-2">
            <div class="event-header">
              <h2 class="event-title">After Party JS</h2>
              <div class="progress">
                <img
                  src="https://quickchart.io/chart?c={
                      type:'radialGauge',
                      data:{
                        datasets:[{data:[30],backgroundColor:'green'}]
                      }  
                    }"
                />
              </div>
            </div>

            <div class="event-details">
              <div class="date-time">
                <h3>
                  <span class="date">20</span> May
                </h3>
                <h3 class="time">16:00 - 19.30</h3>
              </div>
              <img src="../assets/images/location.svg" alt="" class="location" />
            </div>
          </div>

          <div class="event-card event-3">
            <div class="event-header">
              <h2 class="event-title">Web Submit, 2019</h2>
              <div class="progress">
                <img
                  src="https://quickchart.io/chart?c={
                      type:'radialGauge',
                      data:{
                        datasets:[{data:[30],backgroundColor:'green'}]
                      }  
                    }"
                />
              </div>
            </div>

            <div class="event-details">
              <div class="date-time">
                <h3>
                  <span class="date">20</span> May
                </h3>
                <h3 class="time">16:00 - 19.30</h3>
              </div>
              <img src="../assets/images/location.svg" alt="" class="location" />
            </div>
          </div>

          <div class="event-card event-4">
            <div class="event-header">
              <h2 class="event-title">JS Meetup, 2019</h2>
              <div class="progress">
                <img
                  src="https://quickchart.io/chart?c={
                      type:'radialGauge',
                      data:{
                        datasets:[{data:[30],backgroundColor:'green'}]
                      }  
                    }"
                />
              </div>
            </div>

            <div class="event-details">
              <div class="date-time">
                <h3>
                  <span class="date">20</span> May
                </h3>
                <h3 class="time">16:00 - 19.30</h3>
              </div>
              <img src="../assets/images/location.svg" alt="" class="location" />
            </div>
          </div>

          <div class="event-card event-5">
            <div class="event-header">
              <h2 class="event-title">Intro to Dart 2.0</h2>
              <div class="progress">
                <img
                  src="https://quickchart.io/chart?c={
                      type:'radialGauge',
                      data:{
                        datasets:[{data:[30],backgroundColor:'green'}]
                      }  
                    }"
                />
              </div>
            </div>

            <div class="event-details">
              <div class="date-time">
                <h3>
                  <span class="date">10</span> Feb
                </h3>
                <h3 class="time">16:00 - 19.30</h3>
              </div>
              <img src="../assets/images/location.svg" alt="" class="location" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AttendingEvents;
