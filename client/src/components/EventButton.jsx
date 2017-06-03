import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { AttendButton, AbandonButton } from './StyledComponents.jsx';

const EventButton = (props) => {

  const participating = props.role === 'organizing' || props.role === 'attending';

  return participating ? 
    (<AbandonButton onClick={() => props.removeUserFromEvent(props.protestId, props.userId)}>Betray the cause</AbandonButton>) :  
    (<AttendButton onClick={() => props.addUserToEvent(props.protestId, props.userId)}>Join</AttendButton>);
}

export default EventButton;
