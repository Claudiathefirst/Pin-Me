import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import devTools from 'redux-devtools-extension';
import user from './user';

const reducer = combineReducers({
  user,
});

const middleware = devTools(
  applyMiddleware(thunk, logger({ collapsed: true }))
);

const store = createStore(reducer, middleware);
