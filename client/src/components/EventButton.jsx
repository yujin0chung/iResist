import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { AttendButton, AbandonButton, EditButton } from "./StyledComponents.jsx";

const EventButton = props => {

  const leader = props.leader;
  const event = _.find(props.events.allEvents, event => event.id === props.protestId);
  const participating = props.role === "organizing" || props.role === "attending";
  const attending = props.role === "attending";

  let button;

  if (leader && event.status === "upcoming") {
    button = <EditButton onClick={() => props.changeView("ORGANIZE_PROTEST", props.protestId)}>Make Changes</EditButton>
  } 
  else if (attending && event.status !== "passed") {
    button = <AbandonButton onClick={() => {
      props.removeUserFromEvent(props.protestId, props.userId);
      props.changeView("DASHBOARD");
      }}
      >Betray the cause
    </AbandonButton> 
  } 
  else if (!participating && !leader && event.status !== "passed") {
    button =   <AttendButton onClick={() => {
      props.addUserToEvent(props.protestId, props.userId);
      props.changeView("DASHBOARD");
      }}
      >Join
    </AttendButton>
  } 
  else { 
    button = <div></div>
  }
  {console.log('EVENT BUTTON', button)}

       return ( <div>{button}</div> );
            

};

/*
  if (leader && event.status !== "passed") {
    return (
      <EditButton onClick={() => props.changeView("ORGANIZE_PROTEST", props.protestId)}>
        Make Changes
      </EditButton>
    );
  } 
  return participating && event.status !== "passed" ? 
    <AbandonButton onClick={() => {
      props.removeUserFromEvent(props.protestId, props.userId);
      props.changeView("DASHBOARD");
      }}
      >Betray the cause
    </AbandonButton> : 
    <AttendButton onClick={() => {
      props.addUserToEvent(props.protestId, props.userId);
      props.changeView("DASHBOARD");
      }}
      >Join
    </AttendButton>;*/


export default EventButton;
