import { ADD_JOURNEY } from '../constants/ActionTypes';

const initialState = {
  arrivalDate: null,
  departureDate: null,
  noOfTravellers: 0
};

const journey = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case ADD_JOURNEY:
      return state;
    default:
      return state;
  }
};
export default journey;
