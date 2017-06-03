import React from 'react';
import styled from 'styled-components';

export const HomeIcon = styled.i`
  padding-left: 3px;
  padding-bottom: 10px;
  color: tomato;
  aria-hidden: true;
`;

export const Button = styled.div`
  color: tomato;
	font-size: 1em;
  text-align: center;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid tomato;
	border-radius: 3px;
`;

export const AttendButton = Button.extend`
  color: seagreen;
  border-color: seagreen;
`;

export const AbandonButton = Button.extend`
  color: red;
  border-color: red;
`;
export const Status = styled.span`
  size: 10px;
  color: lightgrey;
  padding-left: 5px;
`;

export const Title = styled.div`
  size: 15px;
  border-bottom: solid lightgrey 0.2px;
  padding: 10px;
`;

export const Name = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const Info = styled.p`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 15px;
  float: right;
`;
export const AttendButton = Button.extend`
  color: limegreen;
  border-color: limegreen;
`;

export const AbandonButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;

export const Status = styled.span`
  size: 10px;
  color: lightgrey;
  padding-left: 5px;
`;

export const Title = styled.div`
  size: 15px;
  border-bottom: solid lightgrey 0.2px;
  padding: 10px;
`;

export const Name = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const Info = styled.p`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 15px;
  float: right;
`;