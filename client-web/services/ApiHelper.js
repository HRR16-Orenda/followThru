import axios from 'axios';

export const get = (url: string) => {
  return axios.get(url)
    .then(res => res);
};

export const del = (url) => {
  return axios.delete(url)
    .then(res => res);
};
