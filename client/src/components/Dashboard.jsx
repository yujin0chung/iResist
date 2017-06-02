import React from 'react';
import MyProtestList from './MyProtestList.jsx';
import styled from 'styled-components';

const Title = styled.h4`
  font-weight: normal;
  padding-bottom: 15px;
  padding-left: 10px;
`;

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
        <Title>My Protests</Title>
          <MyProtestList {...this.props} time='upcoming'/>
      </div>
    );
  }
}

export default Dashboard;
