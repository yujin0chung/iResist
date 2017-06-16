import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { DayOfContentWrapper, DayOfTitle, DayOfInfoCategory, DayOfProtestInfo } from './StyledComponents.jsx';
import { Textfit } from 'react-textfit';

const DayOfInfo = (props) => {
  return (
    <DayOfContentWrapper>
      <DayOfTitle><Textfit>{props.event.name}</Textfit></DayOfTitle>
      <DayOfProtestInfo>
        <div>
          <DayOfInfoCategory>Issue:</DayOfInfoCategory>
            <div>{props.event.cause}</div>
        </div>
        <div>
          <DayOfInfoCategory>Meeting Place:</DayOfInfoCategory>
            <div>{props.event.address}</div>
        </div>
        <div>
          <DayOfInfoCategory>When</DayOfInfoCategory>
            <div>{moment(Number(props.event.time)).format('MMMM DD, YYYY h:mm a')} - {moment(Number(props.event.time) + Number(props.event.duration)).format('h:mm a')}</div>
        </div>
        <div>
          <DayOfInfoCategory>Attendee Count</DayOfInfoCategory>
            <div>{props.event.attendee_count}</div>
        </div>
        <div>
          <DayOfInfoCategory>Description:</DayOfInfoCategory>
            <div>{props.event.description}</div>
        </div>
      </DayOfProtestInfo>
    </DayOfContentWrapper>
  );
};

export default DayOfInfo;
