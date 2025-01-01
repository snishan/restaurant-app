import { takeLatest, put, delay } from 'redux-saga/effects';
import {
  fetchOrders,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from '../reducers/ordersSlice';
import mockData from '../../data/mock-data.json';

function* handleFetchOrders() {
  try {
    // Simulate API call
    yield delay(1000);
    yield put(fetchOrdersSuccess(mockData.orders));
  } catch (error) {
    yield put(fetchOrdersFailure(error instanceof Error ? error.message : 'An error occurred'));
  }
}

export function* watchOrders() {
  yield takeLatest(fetchOrders.type, handleFetchOrders);
}