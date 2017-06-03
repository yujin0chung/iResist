import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { AttendButton, AbandonButton } from './StyledComponents.jsx';

const EventButton = (props) => {

  const participating = props.role === 'organizing' || props.role === 'attending';

  return participating ? 
    (<AbandonButton>Leave</AbandonButton>) :  
    (<AttendButton onClick={() => props.addUserToEvent(props.protestId, props.userId, true)}>Join</AttendButton>)
}

export default EventButton;
