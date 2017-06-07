import React from 'react';
import Protest from './Protest.jsx';


const MyProtestList = (props) => {
  
  if (props.fetchInitDataReducer.data) {
    let userId = props.user.userId;
    const protestsAttending = props.user.events_attending;
    const protestsOrganizing = props.user.events_organizing;

    if (props) {
      return (
      <div>
     {console.log('PROPS FROM MYPROTESTLIST:', props.eventListType)}
    {  props.eventListType.map(event => {
        if (protestsAttending.concat(protestsOrganizing).indexOf(event.id) !== -1){
          if(protestsOrganizing.indexOf(event.id)!==-1){
            return <Protest
            {...props}
            key={event.id}
            protestId={event.id}
            protest={props.events.allEvents[event.id]}
            userId={userId}
            role='organizing'
          />
          }else{
          return <Protest
            {...props}
            key={event.id}
            protestId={event.id}
            userId={userId}
            protest={props.events.allEvents[event.id]}
            role='attending'
          />
          }
        }
      })
    }

        {/*{
          protestsOrganizing.map((protestId) => <Protest
            {...props}
            key={protestId}
            protestId={protestId}
            protest={props.events.allEvents[protestId]}
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
            protest={props.events.allEvents[protestId]}
            role='attending'
          />)
        }*/}
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
