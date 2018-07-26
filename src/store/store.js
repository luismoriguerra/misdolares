import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(RootReducer, applyMiddleware(thunk, logger));

export default store;