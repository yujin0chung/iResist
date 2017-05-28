const session = require('express-session');
const RedisStore = require('connect-redis')(session);
let secret = {};

try {
  secrets = require('../../config/configVars');
} catch (e) {
}

const redisUrl = process.env.REDISCLOUD_URL || secrets.redisUrl;
const redisSecret = process.env.REDIS_SECERT || secrets.redisSecret;

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
