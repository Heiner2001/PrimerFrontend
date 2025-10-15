import React, { useState, useEffect } from 'react';
import apiService from '../api/apiService';
import './ApiMessage.css';

function ApiMessage() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      setLoading(true);
      const data = await apiService.getMessage();
      setMessage(data);
      setError(null);
    } catch (err) {
      setError('Error al conectar con la API de Django');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="api-message loading">
        <div className="spinner"></div>
        <p>Cargando datos de Django...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-message error">
        <h3>❌ {error}</h3>
        <p>Asegúrate de que el servidor Django esté corriendo en http://127.0.0.1:8000</p>
        <button onClick={fetchMessage} className="retry-btn">Reintentar</button>
      </div>
    );
  }

  return (
    <div className="api-message success">
      <h2>✅ {message?.titulo}</h2>
      <p className="message-text">{message?.mensaje}</p>
      <div className="message-details">
        <p><strong>Status:</strong> {message?.status}</p>
        <p><strong>Timestamp:</strong> {new Date(message?.timestamp).toLocaleString('es-ES')}</p>
      </div>
      <button onClick={fetchMessage} className="refresh-btn">🔄 Actualizar</button>
    </div>
  );
}

export default ApiMessage;

