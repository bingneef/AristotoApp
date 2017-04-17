import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import FastClick from 'fastclick'
import configureStore from './configureStore';
import Routes from './router';
import './stylesheets/app.sass';

// Track errors in production env
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-undef
  Raven.config(webpackEnv.RAVEN_KEY).install()
}

// remove 200ms delay on mobile click
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line no-undef
    FastClick.attach(document.body);
  }, false);
}

const store = configureStore()

// Render it to DOM
ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
