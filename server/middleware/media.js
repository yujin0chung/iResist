
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const uuidV4 = require('uuid/v4');

try {
  creds = require('../../config/configVars');
} catch (e) {
}

let awsId;
let awsSecret;

if (process.env.AWS_ID) {
  awsId = process.env.AWS_ID;
} else {
  awsId = creds.awsId;
}

if (process.env.AWS_SECRET) {
  awsSecret = process.env.AWS_SECRET;
} else {
  awsSecret = creds.awsSecret;
}

AWS.config.update({
  accessKeyId: awsId,
  secretAccessKey: awsSecret,
  subregion: 'us-west-2'
});

const s3 = new AWS.S3();

module.exports = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'i-resist-media-storage',
    acl: 'public-read',
    metadata: function(req, file, cb) {
      console.log('FILE in metadata IS ', file)
      cb(null, {fieldName: file.fieldname});
    },
    key: function(req, file, cb) {
      console.log('FILE IN KEY: ', file)
      cb(null, uuidV4() + file.originalname);
    }
  })
});
