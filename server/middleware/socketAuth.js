const passportSocketIo = require('passport.socketio');
const auth = require('./auth');

const onAuthorizeSuccess = (data, accept) =>{
  console.log('successful connection to socket.io');
  accept();
};

const onAuthorizeFail = (data, message, error, accept) => {
  if (error) {
    accept(new Error(message));
  }
};

io.use(passportSocketIo.authorize({
  secret: auth.redisSecret,
  store: auth.redisStore,
  success: onAuthorizeSuccess,
  fail: onAuthorizeFail,
}));
