import { call, put, all, takeEvery } from 'redux-saga/effects';
import { getRestaurantsCall, getRestaurantMenuCall } from '../api/api-restaurants';
import {
  GET_RESTAURANTS_REQUESTED,
  GET_RESTAURANTS_SUCCEEDED,
  GET_RESTAURANTS_FAILED,
  GET_RESTAURANT_MENU_REQUESTED,
  GET_RESTAURANT_MENU_SUCCEEDED,
  GET_RESTAURANT_MENU_FAILED,
  SELECT_RESTAURANT_REQUESTED,
  SELECT_RESTAURANT_SUCCEEDED,
  SELECT_RESTAURANT_FAILED
} from '../actions';

/*
 * GET RESTAURANTS
 */
export function* getRestaurants() {
  try {
    let { data } = yield call(getRestaurantsCall);
    // Response
    yield put({
      type: GET_RESTAURANTS_SUCCEEDED,
      payload: data.data,
    });
  } catch (e) {
    yield put({ type: GET_RESTAURANTS_FAILED, message: e.message });
  }
}

export function* watchRestaurants() {
  yield takeEvery(GET_RESTAURANTS_REQUESTED, getRestaurants);
}


/*
 * GET RESTAURANT MENU
 */
export function* getRestaurantMenu(action) {
  try {
    // TODO Make API Request action.payload.id
    let { data } = yield call(getRestaurantMenuCall, action.payload);
        
    // Response
    yield put({
      type: GET_RESTAURANT_MENU_SUCCEEDED,
      payload: data.data.menu.map(rm => ({ ...rm, quantity: 0 })),
    });
  } catch (e) {
    yield put({ type: GET_RESTAURANT_MENU_FAILED, message: e.message });
  }
}

export function* watchRestaurantMenu() {
  yield takeEvery(GET_RESTAURANT_MENU_REQUESTED, getRestaurantMenu);
}


/*
 * SELECT RESTAURANT
 */
export function* selectRestaurant(action) {
  try {
    yield put({
      type: SELECT_RESTAURANT_SUCCEEDED,
      payload: action.payload,
    });
    yield put({
      type: GET_RESTAURANT_MENU_REQUESTED,
      payload: action.payload,
    });
    
  } catch (e) {
    yield put({ type: GET_RESTAURANT_MENU_FAILED, message: e.message });
  }
}

export function* watchSelectRestaurant() {
  yield takeEvery(SELECT_RESTAURANT_REQUESTED, selectRestaurant);
}