import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root.jsx';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store.js';
import preloadedState from './store/preloaded_state.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={ store } />, root);
});
registerServiceWorker();
