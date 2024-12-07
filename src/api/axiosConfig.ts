import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'http://localhost:8080/api',
  baseURL: 'https://ctx850k3-8080.euw.devtunnels.ms/api',
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default apiClient;
