import React from 'react';
import _ from 'lodash';
import { AttendButton, AbandonButton } from './StyledComponents.jsx';

const EventButton = (props) => {
  const participating = props.role === 'organizing' || props.role === 'attending';
  if (participating) {
    return (<AbandonButton>Leave</AbandonButton>);
  }
  return (<AttendButton>Join</AttendButton>);
}

export default EventButton;