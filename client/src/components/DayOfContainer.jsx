import React from 'react';
import io from 'socket.io-client';
import DayOfFeed from './DayOfFeed.jsx';
import DayOfMap from './DayOfMap.jsx';
import DayOfInfo from './DayOfInfo.jsx';
import TwitterFeed from './TwitterFeed.jsx';
import { Tab, NavBar } from './StyledComponents.jsx';



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
    this.client.on('connect', () => {
      this.client.emit('event', this.props.events.activeEvent);
    });

    this.client.on('joinEventReponse', (response) => {
      console.log(response);
    });

    this.client.on('newPin', (pin) => {
      this.props.receivedPin(pin);
    });

    this.client.on('newPinVote', (vote) => {
      this.props.receivedPinVote(vote);
    });

    // this.client.on('newFeedItemVote', (vote) => {
    //   this.props.receiveFeedItemVote(vote);
    // });
  }

  handleCurrentDayOfView(view) {
    this.setState({ currentDayOf: view });
  }

  render () {
    console.log('THIS.PROPS FROM DAY OF CONTAINER', this.props);
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
        {this.state.currentDayOf === 'HOME' ?
          this.props.changeView('DASHBOARD') :
          <div></div>
        }

        <div className="wrapper" style={{display: 'flex', height: '9vh', justifyContent: 'center', marginTop: 'auto', bottom: '0px', position: 'fixed', width: '100%', zIndex: '1000'}}>
          {/*<div style={{marginTop: 'auto'}}>*/}
          <Tab onClick={() => this.handleCurrentDayOfView('INFO')} role="presentation" className="active"><img src='images/infoIcon.svg'/></Tab>
          <Tab onClick={() => this.handleCurrentDayOfView('MAP')} role="presentation"><img src='images/mapIcon.svg'/></Tab>
          <Tab onClick={() => this.handleCurrentDayOfView('FEED')} role="presentation"><img src='images/message.svg'/></Tab>
          <Tab onClick={() => this.handleCurrentDayOfView('TWITTER')} role="presentation"><img src='images/twitter.svg'/></Tab>
          <Tab style={{borderRight: 'none'}}onClick={() => this.handleCurrentDayOfView('DASHBOARD')} role="presentation"><img src='images/homeIcon2.svg'/></Tab>
        </div>
      </div>
    );
  }
}

export default DayOfContainer;
