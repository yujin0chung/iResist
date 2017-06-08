import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  AttendButton,
  AbandonButton,
  EditButton
} from "./StyledComponents.jsx";

const EventButton = props => {
  const leader = props.leader;
  const event = _.find(props.events.allEvents, event => event.id === props.protestId);
  if (leader && event.status !== "passed") {
    return (
      <EditButton onClick={() => props.changeView("ORGANIZE_PROTEST", props.protestId)}>
        Make Changes
      </EditButton>
    );
  } else {
    return <div />;
  }

  const participating = props.role === "organizing" || props.role === "attending";
  return participating? 
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
    </AttendButton>;
};

export default EventButton;
