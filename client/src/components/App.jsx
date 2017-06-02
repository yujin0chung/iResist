import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
// import FindProtest from './FindProtest.jsx';
import Dashboard from './Dashboard.jsx';
import ProtestForm from './ProtestForm.jsx';
import styled from 'styled-components';

const Button = styled.div`
  color: tomato;
	font-size: 1em;
  text-align: center;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid tomato;
	border-radius: 3px;
`;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    this.props.fetchInitData();
  }

  updateView(view) {
    this.props.changeView(view);
  }

  render() {
    
    return (
      <div>
        <Dashboard {...this.props} />
        {/*<FindProtest {...this.props} />*/}
        <ProtestForm createEvent={this.props.postEvent} {...this.props}/>
        <Button onClick={() => this.updateView('FIND_PROTEST')}>Find a Protest</Button>
        <Button onClick={() => this.updateView('ORGANIZE_PROTEST')}>Organize a Protest</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
