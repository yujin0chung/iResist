import React from 'react';
import dateFormat from 'dateformat';
import MapContainer from './MapContainer.jsx';
import EventButton from './EventButton.jsx';
import styled from 'styled-components';
import { ProtestProfile, Status, Title, Name, Info, Icon } from './StyledComponents.jsx';



class Protest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDetails: false,
    };

    this.handleProtestClick = this.handleProtestClick.bind(this);
  }

  handleProtestClick() {
    this.setState({
      displayDetails: !this.state.displayDetails
    });
  }

  render() {

    console.log('PROTEST PROPS', this.props);
    const startTime = new Date(Number(this.props.protest.eventStart));
    const endTime = new Date(Number(this.props.protest.eventStart) + Number(this.props.protest.eventDuration));

    const status = this.props.protest.status;
    const leader = this.props.role !== 'attending' && this.props.role !== 'none';
    const userId = this.props.fetchInitDataReducer.data.user.userId;

    if (this.state.displayDetails) {
      return (
        <ProtestProfile>
          <Name onClick={this.handleProtestClick}>{this.props.protest.name}</Name>
          <Info>
            <p><strong>Cause</strong><br/>{`${this.props.protest.cause}`}</p>
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
            <div><p><strong>Date</strong><br/>{dateFormat(startTime, 'mmmm dd, yyyy: hh:mm')}</p></div>
            <p style={{textAlign: 'right'}}><strong>Participating</strong><br/> {this.props.protest.attendee_count}</p></div>
            {/*<p>Start<br/>{dateFormat(startTime, 'mmmm dd, yyyy: hh:mm')}</p>
            <p>End<br/> {dateFormat(endTime, 'mmmm dd, yyyy: hh:mm')}</p>*/}
            <p><strong>Address</strong><br/> {this.props.protest.address}</p>
            <p><strong>Description</strong><br/> {this.props.protest.description}</p>
            
          </Info>
          <MapContainer {...this.props} mapType='dashboardMap' />
          <EventButton {...this.props} leader={leader} userId={userId} />
        </ProtestProfile>
      );
    } else {
      return (
        <div>
          <Title onClick={this.handleProtestClick}>
<<<<<<< HEAD
            {this.props.protest.name}
            <Status>{this.props.protest.status}</Status>
=======
            {this.props.protest.name} 
            <Status>{this.props.protest.status.toUpperCase()}</Status>
>>>>>>> Styling revisions
            {leader ? <Icon src="images/leaderIcon.svg" /> : <div></div>}
          </Title>
        </div>
      );
    }
  }
}

export default Protest;
