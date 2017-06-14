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
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
     console.log('location', JSON.parse(res.text))
     let newPost = {
       eventId: this.props.events.activeEvent,
       type: JSON.parse(res.text).mimetype,
       url: JSON.parse(res.text).location,
       userId: this.props.user.userId,
       username: this.props.user.username,
       credibility: 0
     };
     this.props.client.emit('newFeedItem', newPost);
    });
  }

  render() {
    console.log('props: ', this.props);
    return (
      <div>
        <Dropzone className='dropzone' onDrop={this.onDrop.bind(this)} multiple={false} acceptedFiles={'image/jpeg', 'video/mp4', 'video/quicktime', 'image/png'}>
          <div>
            <h4>
              <button>Upload Photo/Video</button>
            </h4>
          </div>
        </Dropzone>
      </div>
    );
  }
}

export default UploadMedia
