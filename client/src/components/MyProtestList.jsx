import React from 'react';
import Protest from './Protest.jsx';


const MyProtestList = (props) => {
  console.log('PROPS FROM MYPROTESTLIST:', props);
  if (props.fetchInitDataReducer.data) {
    // let userId = props.fetchInitDataReducer.data.user.userId;
    let userId = props.user.userId;
    // const protestsAttending = props.fetchInitDataReducer.data.user.events_attending;
    const protestsAttending = props.user.events_attending;
    // const protestsOrganizing = props.fetchInitDataReducer.data.user.events_organizing;
    const protestsOrganizing = props.user.events_organizing;

    if (props.time === 'upcoming') {
      return (
      <div>
        {
          protestsOrganizing.map((protestId) => <Protest
            {...props}
            key={protestId}
            protestId={protestId}
            protest={props.fetchInitDataReducer.data.events[protestId]}
            /*{/*protest={props.events.allEvents[protestId]}*/
            userId={userId}
            role='organizing'
          />)
        } 
        {
          protestsAttending.map((protestId) => <Protest
            {...props}
            key={protestId}
            protestId={protestId}
            userId={userId}
            protest={props.fetchInitDataReducer.data.events[protestId]}
            role='attending'
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
