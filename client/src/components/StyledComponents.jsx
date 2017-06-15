import React from 'react';
import styled from 'styled-components';


export const Fist = styled.div`
  background-image: url("images/fist.png");
  background-size: 50% 50%
`;

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

export const PageTitle = styled.div`
  font-family: 'Cousine', monospace;
  font-size: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Header = styled.div`
  font-family: 'Cousine', monospace;
  font-size: 40px;
  padding-left: 8px;
  padding-bottom: 15px;
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

export const Rotate = styled.div`
  transform: rotate(90deg);
  height: 360px;

`;


export const ProtestInfo = styled.div`

`;

export const Wrapper = styled.div`
  padding-bottom: 50px;
  justify-content: center;
  flex: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 47px;
`;

export const InputInfo = styled.div`
  flex-flow: column wrap;
  justify-content: center;
`;
export const Input = styled.input`
  font-size: 14px;
  height: 30px;
  width: 300px;
  padding-left: 10px;
  border-radius: 3px;
  border: solid #dddddd 1px;
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const Text = styled.textarea`
  font-size: 14px;
  height: 30px;
  width: 300px;
  padding-left: 10px;
  border-radius: 3px;
  border: solid #dddddd 1px;
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const Label = styled.label`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: normal;
`;

export const Search = styled.input`
  font-family: 'Open Sans', sans-serif;
  color: tomato;
  font-size: 11px;
  border: 0.8px solid tomato;
  height: 29px;
  border-radius: 3px;
  background-color: white;
  margin-bottom: 15px;
`;
export const Submit = Search.extend`
  width: 150px;
`;


export const Load = styled.div`
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  vertical-align: middle;
  height: 40px;
  padding-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  color: tomato;
  border: 1px solid tomato;
`;

export const TextInput = styled.input`
  width:315px;
  height: 40px;
  background-color:#F7F7F7;
  border:none;
  padding: 10px;
  margin-right: 10px;

`;
export const DayOfTitle = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:1vh;
  font-size:6vh;
  height: 7vh;
  top:0px;
`;

export const DayOfContentWrapper = styled.div`
  height: 83vh;
  width: 100vw;
  margin: auto;
`;

export const CredCount = styled.div`
  text-align: center;
  color: #9B9B9B;
`;

export const PinWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PinContent = styled.div`
  flex-direction: row;
  flex: 8;
  padding-top: 11px;
  padding-left: 10px;
`;

export const ItemUserName = styled.div`
  color: #4A4A4A
`;

export const TimeStamp = styled.div`
  color: #C5C5C5;
  fontSize: '.8em';
`;

export const TimeImage = styled.img`
  width: 1em;
  marginRight: 5px;
`;
export const FeedWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 70px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  border: 1px solid #eee;
  margin-top: 9px;
  border-right: none;
  border-left: none;
  border-top: none;
`;

export const VoteImage = styled.img`
  width: 100%;
`;

export const VoteHolder = styled.div`
  flex:1;
  width: 3em;
  padding-left: 5px;
  text-align: center;
`;

export const PinVoteHolder = styled.div`
  flex:1;
  width: 4em;
  text-align: center;
`;

export const VoteUp = styled.i`
  color: hsla(120, 90%, 42%, 0.93);
  width: 30%;
`;

export const VoteDown = styled.i`
  color: rgba(245, 97, 35, 0.94);
  width: 30%;
`;

export const PinVoteUp = styled.i`
  color: hsla(120, 90%, 42%, 0.93);
  size: 100%;
`;

export const PinVoteDown = styled.i`
  color: rgba(245, 97, 35, 0.94);
  size: 100%;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  bottom: 0;
  padding-bottom: 0.5px;
  width: 100%;
  height: 30px;
  position: fixed;
`;

export const Tab = styled.div`
  flex: 1 0 auto;
	padding: 1.25em 2em;
  background-color:white;
	border: 1px solid black;
  height: 100%;
  background-color: none;
  border-left: none;
  border-bottom: none;
  text-align: center;
  bottom:auto;
  top:auto;
  &:hover {
    background-color: tomato;
  }
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 80%
  }
`;

export const PinTextInput = styled.textarea`
  width: 60vw;
  margin-right: 2vw;
`;

export const PinSubmit = styled.input`
  padding:5px 15px;
  background:#ccc;
  border:0 none;
  cursor:pointer;
  border-radius: 5px;
`;
