const session = require('express-session');
const RedisStore = require('connect-redis')(session);
let secrets = {};

try {
  secrets = require('../../config/configVars');
} catch (e) {
}

let redisUrl;
let redisSecret;

if (process.env.REDISCLOUD_URL) {
  redisUrl = process.env.REDISCLOUD_URL;
} else {
  redisUrl = secrets.redisUrl;
}

if (process.env.REDISCLOUD_URL) {
  redisSecret = process.env.REDIS_SECRET;
} else {
  redisSecret = secrets.redisSecret;
}

const redisClient = require('redis').createClient(redisUrl, {no_ready_check: true});

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.session = session({
  // store: new RedisStore({
  //   client: redisClient,
  //   host: 'localhost',
  //   port: 6379
  // }),
  secret: redisSecret,
  // resave: false,
  // saveUninitialized: false
});
