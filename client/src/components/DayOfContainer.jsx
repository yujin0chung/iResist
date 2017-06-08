import React from 'react';
import io from 'socket.io-client';

class DayOfContainer extends React.Component {
  constructor(props) {
    super(props);

    this.store = {};
    this.client = io();
  }

  componentDidMount() {
    this.client.on('connect', () => {
      this.client.emit('room', this.props.collegeId);
    });

    this.client.on('roomResponse', (response) => {
      console.log(response);
    });
  }

  render () {
    return (
      <h1>You are looking at the day of container</h1>
    );
  }
}

export default DayOfContainer;
