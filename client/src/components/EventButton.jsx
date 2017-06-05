import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { AttendButton, AbandonButton, EditButton } from './StyledComponents.jsx';

/*const EventButton = (props) => {
  console.log('EVENT BUTTON PROPS', props)
  console.log('EVENT BUTTON USER ID', props.userId)
  const leader = props.leader;
  if (leader) { return (<EditButton>Make Changes</EditButton>) }

  const participating = props.role === 'organizing' || props.role === 'attending';
  return participating ? 
    (<AbandonButton onClick={() => {
       props.removeUserFromEvent(props.protestId, props.userId);
       props.changeView('DASHBOARD');
    }}>Betray the cause</AbandonButton>) :  
    (<AttendButton onClick={() => 
       {props.addUserToEvent(props.protestId, props.userId);
       props.changeView('DASHBOARD')}}>Join
     </AttendButton>);
}*/

class EventButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked});
  };

  render() {
    const leader = this.props.leader;
    if (leader) { return (<EditButton>Make Changes</EditButton>) }
    const participating = this.props.role === 'organizing' || this.props.role === 'attending';
    return this.state.clicked ? 
      (<AbandonButton onClick={() => {
        this.props.removeUserFromEvent(this.props.protestId, this.props.userId);
        this.handleClick();
        this.props.changeView('DASHBOARD');
      }}>Betray the cause</AbandonButton>) :  
      (<AttendButton onClick={() => 
        {this.handleClick(); this.props.addUserToEvent(this.props.protestId, this.props.userId);        
        this.props.changeView('DASHBOARD') }}>Join
      </AttendButton>);
      

  }
} 

  
export default EventButton;
