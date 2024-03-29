import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const initialState = {}; 

const middleware = [ thunk ];

const store = createStore(
	rootReducer,
	initialState,
);

export default store;