import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  // https://ctx850k3-8080.euw.devtunnels.ms/api/pet
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default apiClient;
