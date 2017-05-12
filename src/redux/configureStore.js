import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer.js';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function congfigureStore(intialState) {
  return createStore(
    rootReducer,
    intialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
