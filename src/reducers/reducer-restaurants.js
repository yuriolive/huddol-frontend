import {
  GET_RESTAURANTS_SUCCEEDED,
  GET_RESTAURANTS_FAILED,
  SELECT_RESTAURANT_REQUESTED,
  SELECT_RESTAURANT_FAILED,
  DESELECT_RESTAURANT_REQUESTED,
  DESELECT_RESTAURANT_FAILED,
  GET_RESTAURANT_MENU_SUCCEEDED,
  GET_RESTAURANT_MENU_FAILED,
} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCEEDED:
      return { ...state, values: action.payload };
    case GET_RESTAURANTS_FAILED:
      return { ...state, error: action.payload };
    case SELECT_RESTAURANT_FAILED:
      return { ...state, error: action.payload };
    case DESELECT_RESTAURANT_REQUESTED:
      return { ...state, selected: false, menu: null };
    case DESELECT_RESTAURANT_FAILED:
      return { ...state, error: action.payload };
    case GET_RESTAURANT_MENU_SUCCEEDED:
      return { ...state, menu: action.payload };
    case GET_RESTAURANT_MENU_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}