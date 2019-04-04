// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch }
from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import MessagesReducer from './reducers/messages_reducer';

// State and reducers
const identityReducer = (state = null) => state;
const reducers = combineReducers({
  messages: MessagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const initialState = {
  messages: [],
  channels: ['general', 'london', 'react'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};


ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
