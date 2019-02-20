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

// Deselect order
export const DESELECT_ORDER_REQUESTED = 'DESELECT_ORDER_REQUESTED';

export const DESELECT_ORDER_SUCCEEDED = 'DESELECT_ORDER_SUCCEEDED';

export const DESELECT_ORDER_FAILED = 'DESELECT_ORDER_FAILED';

// Get order menu
export const GET_ORDER_REQUESTED = 'GET_ORDER_MENU_REQUESTED';

export const GET_ORDER_SUCCEEDED = 'GET_ORDER_MENU_SUCCEEDED';

export const GET_ORDER_FAILED = 'GET_ORDER_MENU_FAILED';

// Submit order
export const SUBMIT_ORDER_REQUESTED = 'SUBMIT_ORDER_REQUESTED';

export const SUBMIT_ORDER_SUCCEEDED = 'SUBMIT_ORDER_SUCCEEDED';

export const SUBMIT_ORDER_FAILED = 'SUBMIT_ORDER_FAILED';

/*
 * Action creators
 */

export const submitOrder = (restaurant_id, menu) => ({ type: SUBMIT_ORDER_REQUESTED, payload: { restaurant_id, menu } });

export const getOrders = () => ({ type: GET_ORDERS_REQUESTED });

export const selectOrder = id => ({ type: SELECT_ORDER_REQUESTED, payload: id });

export const getOrder = id => ({ type: GET_ORDER_REQUESTED, payload: id });
