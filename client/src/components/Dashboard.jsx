import React from 'react';
import MyProtestList from './MyProtestList.jsx';
import styled from 'styled-components';
import _ from 'lodash';
import { Title } from './StyledComponents.jsx';


class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showPastProtests: false
    };
    this.togglePastProtests = this.togglePastProtests.bind(this);
  }

  togglePastProtests() {
    this.setState({
      showPastProtests: !this.state.showPastProtests
    });
  }

  render() {

    const events = this.props.events.allEvents;

    const upcoming = _.filter(events, event => { return event.status === 'upcoming' });

    const past = _.filter(events, event => { return event.status === 'passed' });

    const ongoing = _.filter(events, event => { return event.status === 'ongoing' });

    return (
      <div>

        <Title>Ongoing Protests</Title>
          <MyProtestList eventListType={ongoing} {...this.props} eventType="ongoing"/>

        <Title>Upcoming Protests</Title>
          <MyProtestList eventListType={upcoming} {...this.props} eventType="upcoming"/>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Title>Past Protests</Title>
          <i onClick={() => this.togglePastProtests()} className="fa fa-angle-down" aria-hidden="true" style={{paddingLeft: '15px', paddingTop: '10px'}}></i>
        </div>
        
        { this.state.showPastProtests ? <MyProtestList eventListType={past} {...this.props} eventType="past"/> : <div></div> }
        
      </div>
    );
  }
}

export default Dashboard;
