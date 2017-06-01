import React from 'react';
import dateFormat from 'dateformat';

class Protest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDetails: true
    };
  }

  render() {
    const startTime = new Date(this.props.protest.eventStart);
    const endTime = new Date(this.props.protest.eventStart + this.props.protest.eventDuration);

    console.log('THIS IS THE START TIME', startTime);

    if (this.state.displayDetails) {
      return (
        <div>
          <h3>{this.props.protest.name} - {this.props.role}</h3>
          <p>Cause: {this.props.protest.cause}</p>
          <p>Start: {dateFormat(startTime, 'mmmm dd, yyyy: hh:mm')}</p>
          <p>End: {dateFormat(endTime, 'mmmm dd, yyyy: hh:mm')}</p>
          <p>Address: {this.props.protest.address}</p>
          <p>Description: {this.props.protest.description}</p>
          <p>Attendee Count: {this.props.protest.attendee_count}</p>
        </div>
      );
    }
  }
}

export default Protest;
