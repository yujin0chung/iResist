import React from 'react';
import Protest from './Protest.jsx';


const MyProtestList = (props) => {
  if (props.fetchInitDataReducer.data) {
    let userId = props.fetchInitDataReducer.data.user.userId;

    const protestsAttending = props.fetchInitDataReducer.data.user.events_attending;
    const protestsOrganizing = props.fetchInitDataReducer.data.user.events_organizing;

    if (props.time === 'upcoming') {
      return (
      <div>
        {
          protestsOrganizing.map((protestId) => <Protest
            {...props}
            key={protestId}
            protestId={protestId}
            protest={props.fetchInitDataReducer.data.events[protestId]}
            role='organizing'
            onClick={() => props.viewEventDropdown()}
          />)
        }
        {
          protestsAttending.map((protestId) => <Protest
            {...props}
            key={protestId}
            protestId={protestId}
            protest={props.fetchInitDataReducer.data.events[protestId]}
            role='attending'
             onClick={() => props.viewEventDropdown()}
          />)
        }
      </div>
      );
    } else {
      return <p>ongoing protest</p>;
    }
  } else {
    return <div></div>;
  }

};

export default MyProtestList;
