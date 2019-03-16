import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createBrowserHistory()
const middleware = [
  thunk,
  routerMiddleware(history) // for dispatching history actions
 ]



export default function configureStore(initialState={}) {
 return createStore(
   rootReducer(history),
   initialState,
   composeEnhancers(
   applyMiddleware(...middleware))
 );
}