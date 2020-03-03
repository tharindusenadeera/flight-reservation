import { fetchEconomicFlights, fetchBusinessFlights } from '../api/flights';
import { setEconomicFlights, setBusinessFlights } from '../action-creators/flights';

export const arrivedFlights = params => dispatch => {
    fetchEconomicFlights(params).then(res => {
        dispatch(setEconomicFlights(res.data));
    })
}

export const businessFlights = params => dispatch => {
    fetchBusinessFlights(params).then(res => {
        dispatch(setBusinessFlights(res.data));
    })
}