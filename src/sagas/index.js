// Worker Saga: access API
// Watcher Saga: listen for actions to be dispatched and call the worker
import { all } from 'redux-saga/effects';
import { watchOrders, watchSubmitOrder, watchDeleteOrder, watchSelectOrder, watchOrderMenu } from './saga-orders';
import { watchRestaurants, watchRestaurantMenu, watchSelectRestaurant } from './saga-restaurants';

export default function* Sagas() {
  yield all([
    watchOrders(),
    watchSubmitOrder(),
    watchSelectOrder(),
    watchDeleteOrder(),
    watchOrderMenu(),
    watchRestaurants(),
    watchRestaurantMenu(),
    watchSelectRestaurant()
  ]);
}