import React from 'react';
import Dropzone  from 'react-dropzone';
import superagent from 'superagent';
import axios from 'axios';

class UploadMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Props in media upload; ', this.props)
  }

  onDrop(files) {
    superagent.post('api/feed/upload')
    .attach('mediaUpload', files[0])
    .attach('eventId', '4')
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
     console.log('location', JSON.parse(res.text))
      axios.post('api/feed/updatedb', {
        user: this.props.user.userId,
        url: JSON.parse(res.text).location,
        type: JSON.parse(res.text).mimetype,
        eventId: this.props.events.activeEvent
      }).then(response => {
        console.log('item posted to database');
      }).catch(e => {
        console.log(e);
      })
    });
  }

  render() {

    return (
      <div>
        <Dropzone style={{height: '15px'}} onDrop={this.onDrop.bind(this)} multiple={false}>
          <div> click to select a file </div>
        </Dropzone>
      </div>
    )
  }
}

export default UploadMedia