import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const preloadedState = {};
  const store = configureStore(preloadedState);

  ReactDOM.render(<App store={ store } />, root);
});
registerServiceWorker();
