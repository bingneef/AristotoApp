import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './configureStore';
import Routes from './router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './stylesheets/app.sass';

localStorage.setItem('apiToken', 'xb4IHmKuEbpfbpocVMImOaVU')

// Track errors in production env
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-undef
  Raven.config(webpackEnv.RAVEN_KEY).install()
}

injectTapEventPlugin()

const store = configureStore()

// Render it to DOM
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={ store }>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
