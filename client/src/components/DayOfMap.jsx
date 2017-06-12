import React from 'react';

class DayOfMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>This will be the map</h2>
        <div className="tabs">
            <button onClick={() => this.props.changeView('DAY_OF')}>Info</button>
            <button onClick={() => this.props.changeView('DAY_OF_MAP')}>Map</button>
            <button onClick={() => this.props.changeView('DAY_OF_FEED')}>Feed</button>
        </div>
      </div>
    );
  }
}

export default DayOfMap;
