import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
//import entry point component here
//import css here

render(
  <Provider store={store} >
    <h1>Redux set up test</h1>
  </Provider>, 
  document.getElementById('root')
);
