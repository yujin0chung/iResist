import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import FindProtest from './FindProtest.jsx';
import EditProtest from './EditProtest.jsx';
import Dashboard from './Dashboard.jsx';
import ProtestForm from './ProtestForm.jsx';
import { Header, Button, Fist } from './StyledComponents.jsx';
import styled from 'styled-components';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    this.props.getUserId();
    // this.props.asyncWrapper([this.props.getAllEvents(), this.props.getAllMaps(), this.props.getUserEvents(userId)], destinationView);
    // this.props.asyncWrapper([this.props.getAllEvents()], 'DASHBOARD');
    // this.props.getAllMaps();
  }

  updateView(view) {
    this.props.changeView(view);
  }

  render() {
    console.log('props', this.props);
    const currentView = this.props.views.currentView;
    if (currentView === 'SPINNER') {
      return (<h1>SPIN LOAD SPIN</h1>);
    }
    if (currentView === 'FIND_PROTEST') {
      return (<FindProtest {...this.props} />);
    }
    if (currentView === 'EDIT_PROTEST') {
      return (<EditProtest {...this.props} />)
    }
    if (currentView === 'ORGANIZE_PROTEST') {
      return (<ProtestForm {...this.props} />);
    } else {
      return (
        <div>
          <Header>iResist</Header>
          <Fist />
          <Dashboard {...this.props} />
          <Button onClick={() => this.updateView('FIND_PROTEST')}>Find a Protest</Button>
          <Button onClick={() => this.updateView('ORGANIZE_PROTEST')}>Organize a Protest</Button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
