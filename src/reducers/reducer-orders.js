import {
  GET_ORDERS_SUCCEEDED,
  GET_ORDERS_FAILED,
  GET_ORDER_SUCCEEDED,
  GET_ORDER_FAILED,
} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ORDERS_SUCCEEDED:
      return { ...state, values: action.payload };
    case GET_ORDERS_FAILED:
      return { ...state, error: action.payload };
    case GET_ORDER_SUCCEEDED:
      return { ...state, currentValue: action.payload };
    case GET_ORDER_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}