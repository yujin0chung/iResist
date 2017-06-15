import React from 'react';
import Dropzone  from 'react-dropzone';
import superagent from 'superagent';
import axios from 'axios';
import styled from 'styled-components';

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
       credibility: 0,
       time: Date.now()
     };
     this.props.client.emit('newFeedItem', newPost);
    });
  }

  render() {
    return (
      <div style={{width:'6em',marginTop:'1em',marginBottom:'1em'}} >
        <Dropzone className='dropzone' onDrop={this.onDrop.bind(this)} multiple={false} acceptedFiles={'image/jpeg', 'video/mp4', 'video/quicktime', 'image/png'}>          
          <i className="fa fa-camera fa-lg"></i>
        </Dropzone>
      </div>
    );
  }
}


export default UploadMedia;
