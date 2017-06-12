import React from 'react';
import io from 'socket.io-client';
import DayOfFeed from './DayOfFeed.jsx';
import DayOfMap from './DayOfMap.jsx';
import SubmitFeedItem from './SubmitFeedItem.jsx';


class DayOfContainer extends React.Component {
  constructor(props) {
    super(props);
    this.client = io('http://localhost:3000');
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

  clickDayOfInfo() {
    this.setState({clickedDayOfInfo: !this.state.clickedDayOfInfo})
  }

  clickDayOfMap() {
    this.setState({clickedDayOfMap: !this.state.clickedDayOfMap})
  }

  clickDayOfFeed() {
    this.setState({clickedDayOfInfo: !this.state.clickedDayOfFeed})
  }

  render () {
    console.log('DAY OF CONTAINER THIS.STATE', this.state)
    let event = _.find(this.props.events.allEvents, event => (event.id === this.props.events.activeEvent ));
    return (
      <div>
        <h1>You are looking at the day of container</h1>

      </div>
    );
  }
}

export default DayOfContainer;
