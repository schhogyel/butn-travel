import * as types from '../constants/ActionTypes';

export const addJourney = (journey: any) => (dispatch: any) => {
  return dispatch({ type: types.ADD_JOURNEY, journey });
};
