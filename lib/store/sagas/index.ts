import { all } from 'redux-saga/effects';
import { watchOrders } from './ordersSaga';
import { watchReservations } from './reservationsSaga';
import { watchMenu } from './menuSaga';

export function* rootSaga() {
  yield all([
    watchOrders(),
    watchReservations(),
    watchMenu(),
  ]);
}