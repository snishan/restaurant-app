import { takeLatest, put, delay } from 'redux-saga/effects';
import {
  fetchMenu,
  fetchMenuSuccess,
  fetchMenuFailure,
} from '../reducers/menuSlice';
import mockData from '../../data/mock-data.json';

function* handleFetchMenu() {
  try {
    // Simulate API call
    yield delay(1000);
    yield put(fetchMenuSuccess(mockData.menu));
  } catch (error) {
    yield put(fetchMenuFailure(error instanceof Error ? error.message : 'An error occurred'));
  }
}

export function* watchMenu() {
  yield takeLatest(fetchMenu.type, handleFetchMenu);
}