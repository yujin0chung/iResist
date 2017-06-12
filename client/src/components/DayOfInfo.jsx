import React from 'react';

const DayOfInfo = (props) => (
  <div>
    <h2>Ongoing Protest: {props.event.name}</h2>
    <h3>Cause: {props.event.cause}</h3>
    <h3>Description: {props.event.description}</h3>
    <h3>Participating: {props.event.attendee_count}</h3>
  </div>
);

export default DayOfInfo;
