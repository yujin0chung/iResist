import React from 'react';
import io from 'socket.io-client';
import DayOfFeed from './DayOfFeed.jsx';
import DayOfInfo from './DayOfInfo.jsx';
import DayOfMap from './DayOfMap.jsx';
import SubmitFeedItem from './SubmitFeedItem.jsx';


class DayOfContainer extends React.Component {
  constructor(props) {
    super(props);

    this.store = {};
    this.client = io('http://localhost:3000');

  //   this.client.emit('test2server');
  //  this.client.on('test!', ()=>console.log('we called the client'));
  }
  

  componentDidMount() {
    this.client.emit('test2server');
    this.client.on('test!', ()=>console.log('we called the client'));

    this.client.on('connect', () => {
      this.client.emit('event', this.props.events.activeEvent);
      //this.props.getFeeds(this.props.events.activeEvent);
    });

    this.client.on('joinEventReponse', (response) => {
      console.log(response);
      console.log('HI!!!!!')
    });

    this.props.getFeeds(this.props.activeEvent);

  }

  render () {
    return (
      <div>
        <h1>You are looking at the day of container</h1>
        <DayOfMap { ...this.props } client={ this.client }/>
        <DayOfMap { ...this.props } client={ this.client } />
        <DayOfFeed {...this.props} client={ this.client } />
      </div>
    );
  }
}

export default DayOfContainer;
