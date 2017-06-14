'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');
const io = require('socket.io');
const Twitter = require('twitter');
const Twit = require('twit');
const creds = require('../config/configVars');

const app = express();

var T = new Twit({
    consumer_key: creds.twitterKey,
    consumer_secret: creds.twitterSecret,
    access_token: creds.twitterAccessToken,
    access_token_secret: creds.twitterAccessTokenSecret,
    timeout_ms: 60*1000
});

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.passport.initialize());
app.use(middleware.passport.session());
app.use(middleware.flash());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.auth);
app.use('/api', routes.api);
app.use('/api/dashboard', routes.dashboard);
app.use('/api/events', routes.events);
app.use('/api/profiles', routes.profiles);
app.use('/api/geocoder', routes.geocoder);
app.use('/api/user', routes.user);
app.use('/api/maps', routes.maps);
app.use('/api/feed', routes.feed);

// var stream = bot.stream('statuses/filter', {track: '#books'}); //probably won't use

// app.get('/getTweet', function(req, res){
//
// })
// stream.on('tweet', function(tweet){
//     console.log(tweet.text+'\n');
//     app.get('/getTweet', function(req, res) {
//       res.send(tweet);
//     })
// });
app.get('/getTweet', function (req, res) {
  T.get('search/tweets', { q: '#trump', count: 100 }, function(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      data.statuses.forEach(function(s){
        console.log('text: ', s.text);
        console.log('time: ', s.created_at);
        console.log('username: ', s.user.screen_name);
        console.log('\n');
      })
      res.send(data.statuses);
    }
  })
})


module.exports = app;
