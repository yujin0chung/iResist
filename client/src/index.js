import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store.js';
import App from './components/App.jsx';
//import entry point component here
//import css here

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState);

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
