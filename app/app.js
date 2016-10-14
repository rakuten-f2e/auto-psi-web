// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

// Import MUI Provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState);

// If you use Redux devTools extension, since v2.0.1, they added an
// `updateStore`, so any enhancers that change the store object
// could be used with the devTools' store.
// As this boilerplate uses Redux & Redux-Saga, the `updateStore` is needed
// if you want to `take` actions in your Sagas, dispatched from devTools.
if (window.devToolsExtension) {
  window.devToolsExtension.updateStore(store);
}

// Set up the router, wrapping all Routes in the App component
import App from 'containers/App';

const MuiApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <MuiApp />
  </Provider>,
  document.getElementById('app')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
// import { install } from 'offline-plugin/runtime';
// install();
