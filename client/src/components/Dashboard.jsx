import React from 'react';
import MyProtestList from './MyProtestList.jsx';
import styled from 'styled-components';
import { PageTitle } from './StyledComponents.jsx';


class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {/*<ListTitle>My ongoing protests</ListTitle>
          <MyProtestList {...this.props} time='ongoing'/>*/}
        <PageTitle style={{paddingLeft: '10px'}}>My Protests</PageTitle>
          <MyProtestList {...this.props} time='upcoming'/>
      </div>
    );
  }
}

export default Dashboard;
