import { call, put, all, takeEvery } from 'redux-saga/effects';
import { submitOrderCall } from '../api/api-orders';
import {
  SUBMIT_ORDER_REQUESTED,
  SUBMIT_ORDER_SUCCEEDED,
  SUBMIT_ORDER_FAILED,
  DESELECT_RESTAURANT_REQUESTED
} from '../actions';

/*
 * SUBMIT ORDER
 */
export function* submitOrder(action) {
  try {
    // Make API Request
    // let { data } = yield call(submitOrderCall, action.payload);

    // Response
    yield put({
      type: SUBMIT_ORDER_SUCCEEDED
    });
    
    yield put({
      type: DESELECT_RESTAURANT_REQUESTED
    });
  } catch (e) {
    yield put({ type: SUBMIT_ORDER_FAILED, message: e.message });
  }
}

export function* watchSubmitOrder() {
  yield takeEvery(SUBMIT_ORDER_REQUESTED, submitOrder);
}
