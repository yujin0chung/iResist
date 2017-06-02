import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions/eventActions';
import { HomeIcon } from './HomeIcon.jsx';


class ProtestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // userId: this.props.fetchInitData, //fetch username
      name: '',
      description: '',
      cause: '',
      address: '',
      date: '',
      timeStart: '',
      timeEnd: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.postEvent(this.state);
  }

  render() {
    const { name, address, date, timeStart, timeEnd } = this.state;
    const formValid = name.length > 0 && address.length > 0 && date.length > 0 && timeStart.length > 0 && timeEnd.length > 0;
    return (
      <div>
          <HomeIcon 
            className="fa fa-home"
            onClick={() => this.props.changeView('DASHBOARD')}
          >
          </HomeIcon>
          <form onSubmit={() => this.handleSubmit()}>
            <label>
              Protest Name:
              <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            </label> < br/>
            <label>
              Description:
              <input type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value})} />
            </label> < br/>
            <label>
              Cause:
              <input type="text" value={this.state.cause} onChange={(e) => this.setState({ cause: e.target.value })} />
            </label> < br/>
            <label>
              Address:
              <input type="text" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
            </label> < br/>
            <label>
              Choose a date:
              <input type="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} />
            </label> < br/>
            <label>
              Choose the time range:
              <input type="time" value={this.state.timeStart} onChange={(e) => this.setState({ timeStart: e.target.value })} />
              <input type="time" value={this.state.timeEnd} onChange={(e) => this.setState({ timeEnd: e.target.value })} />
            </label> < br/>
          <input type="submit" value="Submit" disabled={!formValid} onClick={(e) => {this.handleSubmit(e)}}/>
          </form>
      </div>
    );
  }
}


export default ProtestForm;
