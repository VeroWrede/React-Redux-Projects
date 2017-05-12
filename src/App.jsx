// rendering of initail (home) page
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './redux/configureStore.js';
import initialState from './redux/initialState.js';
import App from './components/containers/storyBook.js';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('appContainer')
);
