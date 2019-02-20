import { call, put, all, takeEvery } from 'redux-saga/effects';
import { submitOrderCall, getOrdersCall } from '../api/api-orders';
import {
  GET_ORDERS_REQUESTED,
  GET_ORDERS_SUCCEEDED,
  GET_ORDERS_FAILED,
  SUBMIT_ORDER_REQUESTED,
  SUBMIT_ORDER_SUCCEEDED,
  SUBMIT_ORDER_FAILED,
  DESELECT_ORDER_REQUESTED
} from '../actions';


/*
 * GET ORDERS
 */
export function* getOrders() {
  try {
    let { data } = yield call(getOrdersCall);
    // Response
    yield put({
      type: GET_ORDERS_SUCCEEDED,
      payload: data.data,
    });
  } catch (e) {
    yield put({ type: GET_ORDERS_FAILED, message: e.message });
  }
}

export function* watchOrders() {
  yield takeEvery(GET_ORDERS_REQUESTED, getOrders);
}

/*
 * SUBMIT ORDER
 */
export function* submitOrder(action) {
  try {
    // Make API Request
    let { data } = yield call(submitOrderCall, action.payload);

    // Response
    yield put({
      type: SUBMIT_ORDER_SUCCEEDED
    });
    
    yield put({
      type: DESELECT_ORDER_REQUESTED
    });
  } catch (e) {
    yield put({ type: SUBMIT_ORDER_FAILED, message: e.message });
  }
}

export function* watchSubmitOrder() {
  yield takeEvery(SUBMIT_ORDER_REQUESTED, submitOrder);
}
