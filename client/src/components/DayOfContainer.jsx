import React from 'react';
import io from 'socket.io-client';
import DayOfFeed from './DayOfFeed.jsx';
import DayOfMap from './DayOfMap.jsx';
import DayOfInfo from './DayOfInfo.jsx';


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

    this.client.on('newFeedItemFromServer', insertedPost => {
      this.props.receiveFeedItem(insertedPost);
    });

    this.client.on('newPin', (pin) => {
      this.props.receivedPin(pin);
    });

    this.client.on('newPinVote', (vote) => {
      console.log(vote);
      this.props.receivedPinVote(vote);
    });
  }

  handleCurrentDayOfView(view) {
    this.setState({ currentDayOf: view });
  }

  render () {
    let event = _.find(this.props.events.allEvents, event => (event.id === this.props.events.activeEvent ));
    return (
      <div>
        <h1>You are looking at the day of container</h1>
        {this.state.currentDayOf === 'INFO' ?
          <DayOfInfo {...this.props} client={this.client} event={event} /> :
          <div></div>
        }
        {this.state.currentDayOf === 'MAP' ?
          <DayOfMap {...this.props} client={this.client} /> :
          <div></div>
        }
        {this.state.currentDayOf === 'FEED' ?
          <DayOfFeed {...this.props} client={this.client} /> :
          <div></div>
        }
        <div className="tabs">
          <button onClick={() => this.handleCurrentDayOfView('INFO')}>Info</button>
          <button onClick={() => this.handleCurrentDayOfView('MAP')}>Map</button>
          <button onClick={() => this.handleCurrentDayOfView('FEED')}>Feed</button>
        </div>
      </div>
    );
  }
}

export default DayOfContainer;
