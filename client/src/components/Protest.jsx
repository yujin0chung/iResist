import React from 'react';

class Protest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>{this.props.protest.name} - {this.props.role}</h3>
        <p>{this.props.protest.cause}</p>
        <p>{this.props.protest.description}</p>
      </div>
    );
  }
}

export default Protest;
