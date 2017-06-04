import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
  font-family: Cabin;
  font-size: 40px;
  padding-left: 8px;
  padding-bottom: 15px;
`;

export const Fist = styled.div`
  background-image: url("images/fist.png");
  background-size: 50% 50%
`

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
  color: limegreen;
  border-color: limegreen;
`;

export const AbandonButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;

export const EditButton = Button.extend`
  color: grey;
  border-color: grey;
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
  font-family: Open Sans;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const Info = styled.p`
  display: flex;
  flex-direction: column;ss
`;

export const Icon = styled.img`
  width: 15px;
  float: right;
`;

