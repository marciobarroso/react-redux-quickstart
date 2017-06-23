import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import ConnectedApp from './app';
import store from './common/store';

const app = document.getElementById("root");

ReactDom.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  app
);
