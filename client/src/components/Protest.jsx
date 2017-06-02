import React from 'react';
import dateFormat from 'dateformat';
import MapContainer from './MapContainer.jsx';

class Protest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDetails: false
    };

    this.handleProtestClick = this.handleProtestClick.bind(this);
  }

  handleProtestClick() {
    this.setState({
      displayDetails: !this.state.displayDetails
    });
  }

  render() {
    const startTime = new Date(this.props.protest.eventStart);
    const endTime = new Date(this.props.protest.eventStart + this.props.protest.eventDuration);

    if (this.state.displayDetails) {
      return (
        <div>
          <h3 onClick={this.handleProtestClick}>{this.props.protest.name} - {this.props.role}</h3>
          <p>Cause: {this.props.protest.cause}</p>
          <p>Start: {dateFormat(startTime, 'mmmm dd, yyyy: hh:mm')}</p>
          <p>End: {dateFormat(endTime, 'mmmm dd, yyyy: hh:mm')}</p>
          <p>Address: {this.props.protest.address}</p>
          <p>Description: {this.props.protest.description}</p>
          <p>Attendee Count: {this.props.protest.attendee_count}</p>
          <MapContainer />
        </div>
      );
    } else {
      return (
        <div>
          <h3 onClick={this.handleProtestClick}>{this.props.protest.name} - {this.props.role}</h3>
        </div>
      );
    }
  }
}

export default Protest;
