import axios from 'axios';

export const get = (url: string) => {
  return axios.get(url)
    .then(res => res);
};

export const del = (url: string) => {
  return axios.delete(url)
    .then(res => res);
};

export const post = (url: string, data: Object) => {
  return axios.post(url, data)
    .then(res => res);
};
