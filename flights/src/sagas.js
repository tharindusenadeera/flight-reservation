import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
//import Api from '...'


function* fetchEconomicFlights(data) {
   try {
      //const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "ECONOMIC_FLIGHT_FETCH_SUCCEEDED", economic: data});
   } catch (e) {
      yield put({type: "ECONOMIC_FLIGHT_FETCH_FAILED", message: e.message});
   }
}

function* fetchBusinessFlight(data) {
   try {
      yield put({type: "BUSINESS_FLIGHT_FETCH_SUCCEEDED", business: data});
   } catch (e) {

   }
}


function* mySaga() {
  yield takeEvery("ECONOMIC_FLIGHT_FETCH", fetchEconomicFlights);
  yield takeEvery("BUSINESS_FLIGHT_FETCH", fetchBusinessFlight);
}

export default mySaga;
