/*
 * Action types
 */

// Get orders
export const GET_ORDERS_REQUESTED = 'GET_ORDERS_REQUESTED';

export const GET_ORDERS_SUCCEEDED = 'GET_ORDERS_SUCCEEDED';

export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED';

// Select order
export const SELECT_ORDER_REQUESTED = 'SELECT_ORDER_REQUESTED';

export const SELECT_ORDER_SUCCEEDED = 'SELECT_ORDER_SUCCEEDED';

export const SELECT_ORDER_FAILED = 'SELECT_ORDER_FAILED';

// Get order menu
export const GET_ORDER_MENU_REQUESTED = 'GET_ORDER_MENU_REQUESTED';

export const GET_ORDER_MENU_SUCCEEDED = 'GET_ORDER_MENU_SUCCEEDED';

export const GET_ORDER_MENU_FAILED = 'GET_ORDER_MENU_FAILED';

/*
 * Action creators
 */
 
export const getOrders = () => ({ type: GET_ORDERS_REQUESTED });

export const selectOrder = id => ({ type: SELECT_ORDER_REQUESTED, payload: id });

export const getOrderMenu = id => ({ type: GET_ORDER_MENU_REQUESTED, payload: id });
