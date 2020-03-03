import { ECONOMIC_FLIGHT_FETCH, BUSINESS_FLIGHT_FETCH } from "../actions/ActionTypes";

export const setEconomicFlights = payload => dispatch => {
  dispatch({ type: ECONOMIC_FLIGHT_FETCH, payload });
};

export const setBusinessFlights = payload => dispatch => {
    dispatch({ type: BUSINESS_FLIGHT_FETCH, payload})
}