import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions/eventActions';


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
      timeEnd: '',
      nameValid: false,
      addressValid: false,
      dateValid: false,
      timeStartValid: false,
      timeEndValid: false,
      formValid: false
    };

   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.postEvent(this.state);
  }

  render() {
    console.log('PROPS FROM PROTEST FORM:', this.props)
    return (
      <form onSubmit={() => this.handleSubmit()}>
        <label>
          Protest Name:
          <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value, nameValid: true})} />
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
          <input type="text" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value, addressValid: true })} />
        </label> < br/>
        <label>
          Choose a date:
          <input type="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value, dateValid: true })} />
        </label> < br/>
        <label>
          Choose the time range:
          <input type="time" value={this.state.timeStart} onChange={(e) => this.setState({ timeStart: e.target.value, timeStartValid: true })} />
          <input type="time" value={this.state.timeEnd} onChange={(e) => this.setState({ timeEnd: e.target.value, timeEndValid: true })} />
        </label> < br/>
      {if(nameValid.state === true && addressValid.state === true && dateValid.state === true && timeStartValid.state === true && timeEndValid.state === true) {
        this.setState({
          formValid: true
        })
      }}
      <input type="submit" value="Submit" disabled={!this.state.formValid} onClick={(e) => {this.handleSubmit(e)}}/>
      </form>
    )
  }
}


export default ProtestForm;
