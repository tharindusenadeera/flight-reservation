import Axios from 'axios';

export const fetchEconomicFlights = params => {
    return Axios.get(`${process.env.REACT_APP_API_URL}flights/cheap`, {
        params: { ...params }
    });
}

export const fetchBusinessFlights = params =>{
    return Axios.get(`${process.env.REACT_APP_API_URL}flights/business`, {
        params: { ...params }
    });
}