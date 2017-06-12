import React from 'react';
import io from 'socket.io-client';
import DayOfFeed from './DayOfFeed.jsx';
import DayOfMap from './DayOfMap.jsx';
import SubmitFeedItem from './SubmitFeedItem.jsx';
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
    this.client.on('connect', () => {
      this.client.emit('event', this.props.events.activeEvent);
      // this.props.getFeeds(this.props.events.activeEvent);
    });

    this.client.on('joinEventReponse', (response) => {
      console.log(response);
      console.log('HI!!!!!')
    });

    this.client.on('fetchFeedItems', (items) => {
      console.log('FETCH FEED ITEMS IN CONTAINER', items)
    })
  }

  handleCurrentDayOfView(view) {
    this.setState({currentDayOf: view})
  }

  render () {
    console.log('DAY OF CONTAINER THIS.STATE', this.state)
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
