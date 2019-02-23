import { call, put, all, takeEvery } from 'redux-saga/effects';
import { submitOrderCall, getOrdersCall, getOrderMenuCall, deleteOrderCall } from '../api/api-orders';
import { push } from 'connected-react-router';
import {
  GET_ORDERS_REQUESTED,
  GET_ORDERS_SUCCEEDED,
  GET_ORDERS_FAILED,
  SUBMIT_ORDER_REQUESTED,
  SUBMIT_ORDER_SUCCEEDED,
  SUBMIT_ORDER_FAILED,
  DESELECT_RESTAURANT_REQUESTED,
  SELECT_ORDER_SUCCEEDED,
  GET_ORDER_MENU_REQUESTED,
  GET_ORDER_MENU_SUCCEEDED,
  GET_ORDER_MENU_FAILED,
  SELECT_ORDER_REQUESTED,
  DELETE_ORDER_REQUESTED,
  DELETE_ORDER_SUCCEEDED,
  DELETE_ORDER_FAILED,
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
      type: DESELECT_RESTAURANT_REQUESTED
    });
    
    // redirect to orders page
    // yield put(push('/orders'));
  } catch (e) {
    yield put({ type: SUBMIT_ORDER_FAILED, message: e.message });
  }
}

export function* watchSubmitOrder() {
  yield takeEvery(SUBMIT_ORDER_REQUESTED, submitOrder);
}



/*
 * SELECT ORDER
 */
export function* selectOrder(action) {
  try {
    yield put({
      type: SELECT_ORDER_SUCCEEDED,
      payload: action.payload,
    });
    
    yield put({
      type: GET_ORDER_MENU_REQUESTED,
      payload: action.payload,
    });
    
  } catch (e) {
    yield put({ type: GET_ORDER_MENU_FAILED, message: e.message });
  }
}

export function* watchSelectOrder() {
  yield takeEvery(SELECT_ORDER_REQUESTED, selectOrder);
}


/*
 * GET ORDER MENU
 */
export function* getOrderMenu(action) {
  try {
    // TODO Make API Request action.payload.id
    let { data } = yield call(getOrderMenuCall, action.payload);
        
    // Response
    yield put({
      type: GET_ORDER_MENU_SUCCEEDED,
      payload: data.data.menu.map(p => ({ ...p.product, quantity: p.quantity})),
    });
  } catch (e) {
    yield put({ type: GET_ORDER_MENU_FAILED, message: e.message });
  }
}

export function* watchOrderMenu() {
  yield takeEvery(GET_ORDER_MENU_REQUESTED, getOrderMenu);
}

/*
 * DELETE ORDER
 */
export function* deleteOrder(action) {
  try {
    // Make API Request
    let { data } = yield call(deleteOrderCall, action.payload);
    
    yield put({
      type: DELETE_ORDER_SUCCEEDED,
      payload: action.payload,
    });
    
    yield put({
      type: DESELECT_ORDER_REQUESTED
    });
    
  } catch (e) {
    yield put({ type: DELETE_ORDER_FAILED, message: e.message });
  }
}

export function* watchDeleteOrder() {
  yield takeEvery(DELETE_ORDER_REQUESTED, deleteOrder);
}