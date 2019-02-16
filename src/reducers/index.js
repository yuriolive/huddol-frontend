import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import OrdersReducer from './reducer-orders';
import RestaurantsReducer from './reducer-restaurants';

export default (history) => combineReducers({
  router: connectRouter(history),
  orders: OrdersReducer,
  restaurants: RestaurantsReducer
});