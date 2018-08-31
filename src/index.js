import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store.js';
import preloadedState from './store/preloaded_state.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  console.log(store.getState());

  ReactDOM.render(<App store={ store } />, root);
});
registerServiceWorker();
