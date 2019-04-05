// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { BrowserRouter as Router, Route, Switch }
from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import './index.scss';
import CarsIndex from './containers/cars_index';
import * as serviceWorker from './serviceWorker';
import CarsReducer from './reducers/cars_reducer';

// State and reducers
const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;

const initialState = {
  garage: garageName,
  cars: []
};

initialState.cars = [
  { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
  { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
  { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
  { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
];

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: CarsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));



ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <div className="container">
          <Route path="/" exact component={CarsIndex} />
        </div>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
