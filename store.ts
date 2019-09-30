import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

export type State = {
  lastUpdate: number;
  light: boolean;
  count: number;
};

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

// REDUCERS
export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: initialState.count
      });
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = (isServer: any) => (dispatch: any) => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
};

export const startClock = (dispatch: any) => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
  }, 1000);
};

export const incrementCount = () => (dispatch: any) => {
  return dispatch({ type: actionTypes.INCREMENT });
};

export const decrementCount = () => (dispatch: any) => {
  return dispatch({ type: actionTypes.DECREMENT });
};

export const resetCount = () => (dispatch: any) => {
  return dispatch({ type: actionTypes.RESET });
};

export function initializeStore(initialState: any) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
