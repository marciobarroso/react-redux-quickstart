import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './common/store';

const app = document.getElementById("app");

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
