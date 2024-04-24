// index.js
import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import counterReducer from './reducers';
import { register } from './serviceWorker';

const store = createStore(counterReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

register();
