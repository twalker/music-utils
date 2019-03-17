import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import routerLocations from './routerLocations';
import simpleReducer from './simpleReducer';

export default history => combineReducers({
  router: connectRouter(history),
  routerLocations,
  simpleReducer
});