/*
 * Action types
 */

// Get restaurants
export const GET_RESTAURANTS_REQUESTED = 'GET_RESTAURANTS_REQUESTED';

export const GET_RESTAURANTS_SUCCEEDED = 'GET_RESTAURANTS_SUCCEEDED';

export const GET_RESTAURANTS_FAILED = 'GET_RESTAURANTS_FAILED';

// Select restaurant
export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';

// Deselect restaurant
export const DESELECT_RESTAURANT = 'DESELECT_RESTAURANT';

// Get restaurant menu
export const GET_RESTAURANT_MENU_REQUESTED = 'GET_RESTAURANT_MENU_REQUESTED';

export const GET_RESTAURANT_MENU_SUCCEEDED = 'GET_RESTAURANT_MENU_SUCCEEDED';

export const GET_RESTAURANT_MENU_FAILED = 'GET_RESTAURANT_MENU_FAILED';

/*
 * Action creators
 */
 
export const getRestaurants = () => ({ type: GET_RESTAURANTS_REQUESTED });

export const selectRestaurant = id => ({ type: SELECT_RESTAURANT, payload: id });

export const deselectRestaurant = id => ({ type: DESELECT_RESTAURANT });

export const getRestaurantMenu = menu => ({ type: GET_RESTAURANT_MENU_REQUESTED, payload: menu });
