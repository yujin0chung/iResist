import React from 'react';
import MyProtestList from './MyProtestList.jsx';
import styled from 'styled-components';
import _ from 'lodash';
import { Title } from './StyledComponents.jsx';


class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('props',this.props)
    
    const events = this.props.events.allEvents;

    const upcoming = _.filter(events, event => {
      return event.status === 'upcoming';
    });

    const past = _.filter(events, event => {
      return event.status === 'passed';
    });

    const ongoing = _.filter(events, event => {
      return event.status === 'ongoing';
    })

    return (
      <div>
        <Title>upcoming protests</Title>
          <MyProtestList eventListType={upcoming} {...this.props} />

        <Title>ongoing protests</Title>
        <MyProtestList eventListType={ongoing} {...this.props}  />

         <Title>past protests</Title>
        <MyProtestList  eventListType={past} {...this.props} />
    
      </div>
    );
  }
}

export default Dashboard;
