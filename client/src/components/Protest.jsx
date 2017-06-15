import React from 'react';
import dateFormat from 'dateformat';
import MapContainer from './MapContainer.jsx';
import EventButton from './EventButton.jsx';
import styled from 'styled-components';
import { DayOfContentWrapper, ToggledProtest, Status, Title, Name, Info, Icon } from './StyledComponents.jsx';
import $ from "jquery";



class Protest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDetails: false,
      currentTemp: 0,
      currentWeatherDescription: ""
    };

    this.handleProtestClick = this.handleProtestClick.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  handleProtestClick() {
    if (this.props.eventType === 'ongoing') {
      this.props.setDayOfEvent(this.props.protestId);
      this.props.fetchDayOfData(this.props.user.userId, this.props.protestId, 'DAY_OF');
    } else {
      this.setState({
        displayDetails: !this.state.displayDetails
      });
    }
  }

  fetchWeather(latitude, longitude) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`,
      data: { units: "imperial", appid: "6bf0bd6fff2f38ae4f3f66c7f55c2b7a" },
      success: (weather) => {
        this.setState({
          currentTemp: Math.floor(weather.main.temp),
          currentWeatherDescription: weather.weather[0].main
        })
      }
    });
  }

  render() {
    const localOffsetToEvent = parseInt(new Date().toString().split('-')[1]) * 36000 + Number(this.props.protest.tzOffset);
    const startTime = new Date(Number(this.props.protest.time) + localOffsetToEvent);
    const endTime = new Date(Number(this.props.protest.time) + Number(this.props.protest.duration) + Number(localOffsetToEvent));
    const status = this.props.protest.status;
    const leader = this.props.role !== 'attending' && this.props.role !== 'none';
    const userId = this.props.user.userId;
    const mapId = this.props.protest.mapId;

    // console.log('this is the latitude and longitude', latitude, longitude);
    var latitude = this.props.maps.allMaps[mapId].lat;
    var longitude = this.props.maps.allMaps[mapId].long;

    if (this.state.displayDetails) {
      // {this.fetchWeather(latitude, longitude);}
      return (
        <ToggledProtest>
          <Name onClick={this.handleProtestClick}>{this.props.protest.name}</Name>
          {this.fetchWeather(latitude, longitude)}
          <Info>
            <p><b>Cause</b> {this.props.protest.cause}</p>
            <p><b>Start</b> {dateFormat(startTime, 'mmmm dd, yyyy: h:MM TT')}</p>
            <p><b>End</b> {dateFormat(endTime, 'mmmm dd, yyyy: h:MM TT')}</p>
            <p><b>Address</b> {this.props.protest.address}</p>
            <p><b>Description</b> {this.props.protest.description}</p>
            <p><b>Participating</b> {this.props.protest.attendee_count}</p>
            <p><b>Current Weather</b> {this.state.currentTemp + "ºF , " + this.state.currentWeatherDescription}</p>
          </Info>
          <MapContainer {...this.props} mapType='dashboardMap' />
          <EventButton {...this.props} leader={leader} userId={userId} protestId={this.props.protest.id} />
        </ToggledProtest>
      );
    } else {
      return (
        <div>
           <Title onClick={this.handleProtestClick}>
            {this.props.protest.name}
            {/*<Status>{this.props.protest.status}</Status>*/}
            {leader ? <Icon src="images/leaderIcon.svg" /> : <div></div>}
          </Title>
        </div>
      );
    }
  }
}

export default Protest;
