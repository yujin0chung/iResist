import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { AttendButton, AbandonButton } from './StyledComponents.jsx';

const EventButton = (props) => {
    
  const participating = props.role === 'organizing' || props.role === 'attending';
  if (participating) {
    return (<AbandonButton>Leave</AbandonButton>);
  }
  return (<AttendButton>Join</AttendButton>);
//   {
//     participating ? 
//       <AbandonButton>Leave</AbandonButton> : 
//       <AttendButton>Join</AttendButton>
//   }
}



//EventButton = connect()(EventButton);
export default EventButton;