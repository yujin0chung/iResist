import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render() {
    return <h1>Hello from the app! {console.log(this.props.voteItem)}</h1>;
  }
}

const mapStateToProps = (state) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
