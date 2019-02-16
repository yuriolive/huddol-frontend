import { call, put, all, takeEvery } from 'redux-saga/effects';
import {
  GET_RESTAURANTS_REQUESTED,
  GET_RESTAURANTS_SUCCEEDED,
  GET_RESTAURANTS_FAILED,
  GET_RESTAURANT_REQUESTED,
  GET_RESTAURANT_SUCCEEDED,
  GET_RESTAURANT_FAILED,
} from '../actions';

/*
 * GET RESTAURANTS
 */
export function* getRestaurants() {
  try {
    // TODO Make API Request
    const restaurants = [{
      id: 1,
      name: 'Huddols Burguers',
      category: 'Burguers', 
      price: 3,
      rating: 4.5,
      deliveryTime: 45
    }, {
      id: 2,
      name: 'Huddols Pizzas',
      category: 'Pizza', 
      price: 2,
      rating: 4.8,
      deliveryTime: 20
    }];
    
    // Response
    yield put({
      type: GET_RESTAURANTS_SUCCEEDED,
      payload: restaurants,
    });
  } catch (e) {
    yield put({ type: GET_RESTAURANTS_FAILED, message: e.message });
  }
}

export function* watchRestaurants() {
  yield takeEvery(GET_RESTAURANTS_REQUESTED, getRestaurants);
}
