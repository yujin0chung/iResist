import React from 'react';
import io from 'socket.io-client';
import DayOfFeed from './DayOfFeed.jsx';
import DayOfInfo from './DayOfInfo.jsx';
import DayOfMap from './DayOfMap.jsx';

class DayOfContainer extends React.Component {
  constructor(props) {
    super(props);

    this.store = {};
    this.client = io();
  }

  componentDidMount() {
    this.client.on('connect', () => {
      this.client.emit('event', this.props.events.activeEvent);
    });

    this.client.on('joinEventReponse', (response) => {
      console.log(response);
    });
  }

  render () {
    return (
      <div>
        <h1>You are looking at the day of container</h1>
        <DayOfMap { ...this.props } client={ this.client }/>
      </div>
    );
  }
}

export default DayOfContainer;


