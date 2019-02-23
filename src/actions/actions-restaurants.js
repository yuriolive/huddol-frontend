/*
 * Action types
 */

// Get restaurants
export const GET_RESTAURANTS_REQUESTED = 'GET_RESTAURANTS_REQUESTED';

export const GET_RESTAURANTS_SUCCEEDED = 'GET_RESTAURANTS_SUCCEEDED';

export const GET_RESTAURANTS_FAILED = 'GET_RESTAURANTS_FAILED';

// Select restaurant
export const SELECT_RESTAURANT_REQUESTED = 'SELECT_RESTAURANT_REQUESTED';

export const SELECT_RESTAURANT_SUCCEEDED = 'SELECT_RESTAURANT_SUCCEEDED';

export const SELECT_RESTAURANT_FAILED = 'SELECT_RESTAURANT_FAILED';

// Deselect restaurant
export const DESELECT_RESTAURANT_REQUESTED = 'DESELECT_RESTAURANT_REQUESTED';

// Get restaurant menu
export const GET_RESTAURANT_MENU_REQUESTED = 'GET_RESTAURANT_MENU_REQUESTED';

export const GET_RESTAURANT_MENU_SUCCEEDED = 'GET_RESTAURANT_MENU_SUCCEEDED';

export const GET_RESTAURANT_MENU_FAILED = 'GET_RESTAURANT_MENU_FAILED';

// Update restaurant menu
export const UPDATE_RESTAURANT_MENU_REQUESTED = 'UPDATE_RESTAURANT_MENU_REQUESTED';

/*
 * Action creators
 */
 
export const getRestaurants = () => ({ type: GET_RESTAURANTS_REQUESTED });

export const selectRestaurant = id => ({ type: SELECT_RESTAURANT_REQUESTED, payload: id });

export const deselectRestaurant = () => ({ type: DESELECT_RESTAURANT_REQUESTED });

export const getRestaurantMenu = id => ({ type: GET_RESTAURANT_MENU_REQUESTED, payload: id });

export const updateRestaurantMenu = (quantity, id) => ({ type: UPDATE_RESTAURANT_MENU_REQUESTED, payload: { quantity, id }});
