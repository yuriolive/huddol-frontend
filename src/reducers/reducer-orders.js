import {
  GET_ORDERS_SUCCEEDED,
  GET_ORDERS_FAILED,
  GET_ORDER_MENU_SUCCEEDED,
  GET_ORDER_MENU_FAILED,
  SUBMIT_ORDER_REQUESTED,
  SUBMIT_ORDER_SUCCEEDED,
  SUBMIT_ORDER_FAILED,
  DELETE_ORDER_SUCCEEDED,
  SELECT_ORDER_SUCCEEDED,
  DESELECT_ORDER_REQUESTED,
  UPDATE_ORDER_MENU_REQUESTED
} from '../actions';

export default function (state = { values: [] }, action) {
  switch (action.type) {
    case GET_ORDERS_SUCCEEDED:
      return { ...state, values: action.payload };
    case GET_ORDERS_FAILED:
      return { ...state, error: action.payload };
    case SUBMIT_ORDER_REQUESTED:
      return { ...state, isSubmitting: true };
    case SUBMIT_ORDER_SUCCEEDED:
      return { ...state, isSubmitting: false };
    case SUBMIT_ORDER_FAILED:
      return { ...state, isSubmitting: false };
    case SELECT_ORDER_SUCCEEDED:
      return { ...state, selected: action.payload };
    case DELETE_ORDER_SUCCEEDED:
      return { ...state, values: state.values.filter(o => o.id !== action.payload) };
    case GET_ORDER_MENU_SUCCEEDED:
      return { ...state, menu: action.payload };
    case GET_ORDER_MENU_FAILED:
      return { ...state, error: action.payload };
    case UPDATE_ORDER_MENU_REQUESTED:
      const product = state.menu.find(p => p.id === action.payload.id);
      return { 
        ...state,
        menu: [ ...state.menu.filter(p => p.id !== action.payload.id), { ...product, quantity: action.payload.quantity } ].sort((a, b) => (a.id - b.id)) 
      };
    case DESELECT_ORDER_REQUESTED:
      return { ...state, selected: false, menu: null };
    default:
      return state;
  }
}