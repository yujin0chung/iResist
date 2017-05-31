import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
import { createLogger } from 'redux-logger';

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

//We can define default (initial) state here
const defaultState = {

};

const store = createStore(
  rootReducer,
  //defaultState here,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

// Allows for hot-reloading (changes being rendered to screen w/out refreshing page)
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index.js').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
