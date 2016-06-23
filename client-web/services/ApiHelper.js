import axios from 'axios';

export const get = (url: string) => {
  return axios.get(url)
    .then(res => res);
};
