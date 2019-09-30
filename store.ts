import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

export function configureStore() {
  return createStore(reducer, composeWithDevTools(applyMiddleware()));
}
