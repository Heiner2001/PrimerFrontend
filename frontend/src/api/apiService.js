import axios from 'axios';
import API_BASE_URL from './config';

// Configurar axios con la URL base
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Servicio de API
const apiService = {
  // Obtener mensaje de bienvenida
  getMessage: async () => {
    try {
      const response = await api.get('/api/message/');
      return response.data;
    } catch (error) {
      console.error('Error fetching message:', error);
      throw error;
    }
  },

  // Prueba de GET
  testGet: async () => {
    try {
      const response = await api.get('/api/test/');
      return response.data;
    } catch (error) {
      console.error('Error in test GET:', error);
      throw error;
    }
  },

  // Prueba de POST
  testPost: async (data) => {
    try {
      const response = await api.post('/api/test/', data);
      return response.data;
    } catch (error) {
      console.error('Error in test POST:', error);
      throw error;
    }
  },
};

export default apiService;

