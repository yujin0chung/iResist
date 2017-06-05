import React from 'react';
import Protest from './Protest.jsx';
import _ from 'lodash';
import { HomeIcon, PageTitle } from './StyledComponents.jsx';


class FindProtest extends React.Component {
  render() {
    const events = this.props.fetchInitDataReducer.data.events;
    if (events.length === 0) {
      return (
        <div>
          No upcoming protest, 
          why don't you lead one?
        </div>
      );
    }
    let upcomingEvents = [];
    for (var event in events) {
      if (events[event].status === 'upcoming') {
        upcomingEvents.push(event);
      }
    }
    const attending = this.props.fetchInitDataReducer.data.user.events_attending;
    const organizing = this.props.fetchInitDataReducer.data.user.events_organizing;

    const notParticipating = _.reject(upcomingEvents, event => {
      return _.includes(attending, parseInt(event)) || _.includes(organizing, parseInt(event));
    });

    return (
      <div>
        <HomeIcon 
          className="fa fa-home fa-lg"
          onClick={() => this.props.changeView('DASHBOARD')}
          >
        </HomeIcon>
        <PageTitle>Find a Protest</PageTitle>
        {
          notParticipating.map(protestId => <Protest
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
