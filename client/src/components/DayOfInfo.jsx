import React from 'react';
import styled from 'styled-components'

const DayOfInfo = (props) => (
  <div>
    <PageTitle>{props.event.name}</PageTitle>
      <ProtestInfo>
        <div>
          <Category>What</Category>
           <div>{props.event.cause}</div>
        </div>
        <div>
          <Category>Where</Category>
           <div>{props.event.address}</div>
        </div>
        <div>
          <Category>When</Category>
           <div>{props.event.time}</div>
        </div>
        <div>
          <Category>Why</Category>
           <div>{props.event.description}</div>
        </div>
        <div>
          <Category>Participating</Category>
           <div>{props.event.attendee_count}</div>
        </div>                
      </ProtestInfo>
  </div>
);

const Category = styled.div`
  font-family: 'Amiko', sans-serif;
  font-weight:bold;
  font-size: 12.5px;
`

const PageTitle = styled.div`
  font-family: 'Cousine', monospace;
  font-size: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
      text-align: center;
`;

export const ProtestInfo = styled.div`

  margin-left: 60px;
  margin-top: 45px;
`


export default DayOfInfo;
