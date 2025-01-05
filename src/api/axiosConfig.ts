import axios from 'axios';

const apiClient = axios.create({
  //baseURL: 'http://localhost:8080/api',
  //baseURL: 'https://ctx850k3-8080.euw.devtunnels.ms/api',
  baseURL: 'https://backend-vitaliykorobov103.amvera.io/api',

  headers: {
    'Content-Type': 'application/json', 
  },
});

export default apiClient;
