import {
  ECONOMIC_FLIGHT_FETCH_SUCCEEDED,
  BUSINESS_FLIGHT_FETCH_SUCCEEDED
} from '../actions/ActionTypes';

const initialState = {
  economicFight: [],
  businsessFlight: []
  };

  export default function(state = initialState, action) {
    switch (action.type) {
        case ECONOMIC_FLIGHT_FETCH_SUCCEEDED :
            return { ...state, economicFight: action.payload }; 
        case BUSINESS_FLIGHT_FETCH_SUCCEEDED:
            return { ...state, businsessFlight: action.payload};
      default:
        return state;
    }
  }
  