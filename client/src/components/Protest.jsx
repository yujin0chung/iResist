import React from 'react';
import dateFormat from 'dateformat';
import MapContainer from './MapContainer.jsx';
import styled from 'styled-components';


const Title = styled.div`
  size: 15px;
  border-bottom: solid lightgrey 0.2px;
  padding: 10px;
`;

const Name = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
`;
const Info = styled.p`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  width: 15px;
  float: right;
`;

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
    const leader = this.props.role !== 'attending';

    if (this.state.displayDetails) {
      return (
        <div>
          <Name onClick={this.handleProtestClick}>{this.props.protest.name}</Name>
          <Info>
            <p><b>Cause:</b> {this.props.protest.cause}</p>
            <p><b>Start:</b> {dateFormat(startTime, 'mmmm dd, yyyy: hh:mm')}</p>
            <p><b>End:</b> {dateFormat(endTime, 'mmmm dd, yyyy: hh:mm')}</p>
            <p><b>Address:</b> {this.props.protest.address}</p>
            <p><b>Description:</b> {this.props.protest.description}</p>
            <p><b>Attendee Count:</b> {this.props.protest.attendee_count}</p>
          </Info>
          <MapContainer {...this.props} mapType='dashboardMap' />
        </div>
      );
    } else {
      return (
        <div>
          <Title onClick={this.handleProtestClick}>{this.props.protest.name} {leader ? <Icon src="images/leaderIcon.svg" /> : <div></div>}</Title>
        </div>
      );
    }
  }
}

export default Protest;
