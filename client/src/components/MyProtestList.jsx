import React from 'react';
import Protest from './Protest.jsx';


const MyProtestList = (props) => {

  let userId = props.user.userId;
  const protestsAttending = props.user.events_attending;
  const protestsOrganizing = props.user.events_organizing;

  if (props) {
    return (
      <div>
        {props.eventListType.map(event => {
          if (protestsAttending.concat(protestsOrganizing).indexOf(event.id) !== -1) {
            if (protestsOrganizing.indexOf(event.id) !== - 1) {
              return <Protest
                {...props}
                key={event.id}
                protestId={event.id}
                protest={props.events.allEvents[event.id]}
                userId={userId}
                role='organizing'
              />
            } else {
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
      </div>
    );
  }

};

export default MyProtestList;
