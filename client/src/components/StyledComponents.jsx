import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
  font-family: 'Nobile', sans-serif;
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
  font-family: 'Cousine', monospace;
	font-size: 1em;
  text-align: center;
	margin: 1em;
	padding: 0.25em 1em;
	border: 0.8px solid tomato;
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
  font-size: 13px;
  color: lightgrey;
  font-weight: 100;
  padding-left: 10px;
`;

export const Title = styled.div`
  font-family: 'Open Sans', sans-serif;
  size: 35px;
  border-bottom: solid lightgrey 0.2px;
  padding: 10px;
`;

export const Name = styled.div`
  font-family: 'Open Sans', sans-serif;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const Info = styled.p`
  display: flex;
  margin: none;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 15px;
  float: right;
`;

export const Load = styled.div`
  display: -webkit-flex
  display: flex,
  WebkitFlex: 0 1 auto,
  flex: 0 1 auto,
  WebkitFlexDirection: column,
  flexDirection: column,
  WebkitFlexGrow: 1,
  flexGrow: 1,
  WebkitFlexShrink: 0,
  flexShrink: 0,
  WebkitFlexBasis: 25%,
  flexBasis: 25%,
  maxWidth: 25%,
  height: 200px,
  WebkitAlignItems: center,
  alignItems: center,
  WebkitJustifyContent: center,
  justifyContent: cente
`

export const ProtestProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 20px;
  border: .65px solid black;
`
export const PageTitle = styled.div`
  font-family: 'Cousine', monospace;
  font-size: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 47px;
`

export const InputInfo = styled.div`
  flex-flow: column wrap;
  justify-content: center;
`
export const Input = styled.input`
  font-size: 14px;
  height: 30px;
  width: 300px;
  padding-left: 10px;
  border-radius: 3px;
  border: solid #dddddd 1px;
  margin-bottom: 15px;
  margin-right: 15px;
`

export const Text = styled.textarea`
  font-size: 14px;
  height: 30px;
  width: 300px;
  padding-left: 10px;
  border-radius: 3px;
  border: solid #dddddd 1px;
  margin-bottom: 15px;
  margin-right: 15px;
`

export const Label = styled.label`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: normal;
`

export const Search = styled.input`
  font-family: 'Open Sans', sans-serif;
  color: tomato;
  font-size: 11px;
  border: 0.8px solid tomato;
  height: 29px;
  border-radius: 3px;
  background-color: white;
  margin-bottom: 15px;
`

export const Submit = Search.extend`
  width: 150px;
`

