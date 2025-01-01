import { takeLatest, put, delay } from 'redux-saga/effects';
import {
  fetchReservations,
  fetchReservationsSuccess,
  fetchReservationsFailure,
} from '../reducers/reservationsSlice';
import mockData from '../../data/mock-data.json';

function* handleFetchReservations() {
  try {
    // Simulate API call
    yield delay(1000);
    yield put(fetchReservationsSuccess(mockData.reservations));
  } catch (error) {
    yield put(fetchReservationsFailure(error instanceof Error ? error.message : 'An error occurred'));
  }
}

export function* watchReservations() {
  yield takeLatest(fetchReservations.type, handleFetchReservations);
}