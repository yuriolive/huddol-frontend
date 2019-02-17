import axios from 'axios';
import config from './config';

// Get all orders
export const getOrdersCall = (data) => {
  return axios.request({
    method: 'get',
    url: `${config.protocol}://${config.domain}/orders`
  });
};


// Submit new order
export const submitOrderCall = (data) => {
  return axios.request({
    method: 'post',
    url: `${config.protocol}://${config.domain}/orders`,
    data
  });
};

// Update order