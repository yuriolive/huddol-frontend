// Worker Saga: access API
// Watcher Saga: listen for actions to be dispatched and call the worker
import { all } from 'redux-saga/effects';
import { watchRestaurants } from './saga-restaurants';

export default function* Sagas() {
  yield all([
    watchRestaurants()
  ]);
}