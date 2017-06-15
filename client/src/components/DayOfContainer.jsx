import React from 'react';
import io from 'socket.io-client';
import DayOfFeed from './DayOfFeed.jsx';
import DayOfMap from './DayOfMap.jsx';
import DayOfInfo from './DayOfInfo.jsx';
import TwitterFeed from './TwitterFeed.jsx';
import styled from 'styled-components'



class DayOfContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDayOf: 'INFO'
    };
    this.client = io();
    this.handleCurrentDayOfView = this.handleCurrentDayOfView.bind(this);
  }

  componentDidMount() {
    console.log('Props; ', this.props);
    this.client.on('connect', () => {
      this.client.emit('event', this.props.events.activeEvent);
    });

    this.client.on('joinEventReponse', (response) => {
      console.log(response);
    });

    // this.client.on('newFeedItemFromServer', insertedPost => {
    //   this.props.receiveFeedItem(insertedPost);
    // });

    this.client.on('newPin', (pin) => {
      this.props.receivedPin(pin);
    });

    this.client.on('newPinVote', (vote) => {
      this.props.receivedPinVote(vote);
    });

    this.client.on('newFeedItemVote', (vote) => {
      this.props.receiveFeedItemVote(vote);
    });
  }

  handleCurrentDayOfView(view) {
    this.setState({ currentDayOf: view });
  }

  render () {
    let event = _.find(this.props.events.allEvents, event => (event.id === this.props.events.activeEvent ));
    return (
      <div>

        
        {this.state.currentDayOf === 'INFO' ?
          <DayOfInfo {...this.props} client={this.client} event={event} /> :
          <div></div>
        }
        {this.state.currentDayOf === 'MAP' ?
          <DayOfMap event={event} {...this.props} client={this.client} /> :
          <div></div>
        }
        {this.state.currentDayOf === 'FEED' ?
          <DayOfFeed event={event} {...this.props} client={this.client} /> :
          <div></div>
        }
        {this.state.currentDayOf === 'TWITTER' ?
          <TwitterFeed {...this.props} /> :
          <div></div>
        }

        <div className="wrapper" style={{display: 'flex',height: '4em', justifyContent: 'center', marginTop: 'auto', bottom: '0px', position: 'fixed', width: '100%',marginLeft:'-15px'}}>
          {/*<div style={{marginTop: 'auto'}}>*/}
          <Tab onClick={() => this.handleCurrentDayOfView('INFO')} role="presentation" className="active"><img src='images/infoIcon.svg'/></Tab>
          <Tab onClick={() => this.handleCurrentDayOfView('MAP')} role="presentation"><img src='images/mapIcon.svg'/></Tab>
          <Tab onClick={() => this.handleCurrentDayOfView('FEED')} role="presentation"><img src='images/feedIcon.svg'/></Tab>
          <Tab style={{borderRight: 'none'}}onClick={() => this.handleCurrentDayOfView('DASHBOARD')} role="presentation"><img src='images/homeIcon2.svg'/></Tab>
        </div>
      </div>
    );
  }
}

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  bottom: 0;
  padding-bottom: 0.5px;
  width: 100%;
  height: 30px;
  position: fixed;
`

// export const NavBar = styled.div`
//   display: flex;
//   flex-direction: row;
//   min-height: 100vh;
//   bottom: 0;
//   padding-bottom: 0.5px;
//   width: 100%;
//   height: 30px;
//   position: fixed;
// `


export const Tab = styled.div`
  flex: 1 0 auto;
	padding: 1.25em 2em;
  background-color:white;
	border: 0.05px solid black;
  height: 100%;
  background-color: none;
  border-left: none;
  border-bottom: none;
  text-align: center;
  
`

export default DayOfContainer;
