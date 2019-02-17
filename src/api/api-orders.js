import axios from 'axios';
import config from './config';

export const submitOrderCall = (data) => {
  return axios.request({
    method: 'post',
    url: `${config.protocol}://${config.domain}/posts`,
    data
  });
};