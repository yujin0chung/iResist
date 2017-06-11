import React from 'react';

class SubmitFeedItem extends React.Component {
  render() {
    return (
      <div>
        <input type="file" accept="video/*;capture=camcorder" />
      </div>
    );
  }
}

export default SubmitFeedItem;
