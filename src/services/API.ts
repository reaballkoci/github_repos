import axios from 'axios';

const API = () => {
  return axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
      accept: 'application/vnd.github.v3+json',
    },
  });
};

export default API;
