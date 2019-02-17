import {
  GET_RESTAURANTS_SUCCEEDED,
  GET_RESTAURANTS_FAILED,
  SELECT_RESTAURANT_SUCCEEDED,
  DESELECT_RESTAURANT_REQUESTED,
  GET_RESTAURANT_MENU_SUCCEEDED,
  GET_RESTAURANT_MENU_FAILED,
  UPDATE_RESTAURANT_MENU_REQUESTED
} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCEEDED:
      return { ...state, values: action.payload };
    case GET_RESTAURANTS_FAILED:
      return { ...state, error: action.payload };
    case SELECT_RESTAURANT_SUCCEEDED:
      return { ...state, selected: action.payload };
    case DESELECT_RESTAURANT_REQUESTED:
      return { ...state, selected: false, menu: null };
    case UPDATE_RESTAURANT_MENU_REQUESTED:
      const product = state.menu.find(p => p.key === action.payload.id);
      return { 
        ...state,
        menu: [ ...state.menu.filter(p => p.key !== action.payload.id), { ...product, quantity: action.payload.quantity } ].sort((a, b) => (a.key - b.key)) 
      };
    case GET_RESTAURANT_MENU_SUCCEEDED:
      return { ...state, menu: action.payload };
    case GET_RESTAURANT_MENU_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}