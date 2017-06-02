import React from 'react';
import Protest from './Protest.jsx';

class FindProtest extends React.Component {
  render() {
    const events = this.props.fetchInitDataReducer.data.events;
    let upcomingEvents = [];
    for (var event in events) {
      if (events[event].status === 'upcoming') {
        upcomingEvents.push(event);
      }
    }
    return (
      <div>
        <h3>Find a Protest</h3>
        {
          upcomingEvents.map(protestId => <Protest
            {...this.props}
            key={protestId}
            protestId={protestId}
            protest={events[protestId]}
            role='none'
          />)
        }
      </div>
    );
  }
}

export default FindProtest;
