import React from 'react';
import Dropzone  from 'react-dropzone';
import superagent from 'superagent';

class UploadMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  onDrop(files) {
    superagent.post('api/feed/upload')
    .attach('mediaUpload', files[0])
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      console.log('stuff from Amazon: ', JSON.parse(res.text));
    });
  }

  render() {

    return (
      <div>
        <Dropzone onDrop={this.onDrop} multiple={false}>
          <div> click to select a file </div>
        </Dropzone>
      </div>
    )
  }
}

export default UploadMedia