import axios from 'axios';
import config from './config';

// Get restaurants
export const getRestaurantsCall = () => {
  return axios.request({
    method: 'get',
    url: `${config.protocol}://${config.domain}/restaurants`
  });
};

// Get restaurant menu
export const getRestaurantMenuCall = id => {
  return axios.request({
    method: 'get',
    url: `${config.protocol}://${config.domain}/restaurants/${id}`
  });
};