import React from 'react';
import MyProtestList from './MyProtestList.jsx';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchInitData();
  }

  render() {
    return (
      <div>
        <h2>My ongoing protests</h2>
          <MyProtestList {...this.props} time='ongoing'/>
        <h2>My upcoming protests</h2>
          <MyProtestList {...this.props} time='upcoming'/>
      </div>
    );
  }
}

export default Dashboard;
