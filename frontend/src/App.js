import React from 'react';
import './App.css';
import ApiMessage from './components/ApiMessage';
import Saludo from './Saludo';
import Contador from './Contador';
import SaludoPersonalizado from './SaludoPersonalizado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Django + React Integration</h1>
        <p className="subtitle">Frontend en React conectado con Backend en Django</p>
      </header>

      <main className="App-main">
        <div className="container">
          <section className="intro-section">
            <h2>¡Bienvenido!</h2>
            <p>
              Esta aplicación demuestra la integración completa entre Django (Backend) 
              y React (Frontend).
            </p>
            <div style={{ marginTop: '20px', padding: '20px', background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)', borderRadius: '10px' }}>
              <Saludo nombre="Ana" />
              <Saludo nombre="Luis" />
              <Saludo nombre="María" />
            </div>
            <div style={{ marginTop: '20px', padding: '30px', background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)', borderRadius: '10px', textAlign: 'center' }}>
              <Contador />
            </div>
            <div style={{ marginTop: '20px', padding: '30px', background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)', borderRadius: '10px' }}>
              <h3 style={{ color: '#667eea', textAlign: 'center', marginBottom: '20px' }}>✨ Saludo Personalizado</h3>
              <SaludoPersonalizado />
            </div>
          </section>

          <section className="api-section">
            <h3>📡 Conexión con API Django</h3>
            <ApiMessage />
          </section>

          <section className="features-section">
            <h3>✨ Características</h3>
            <div className="features-grid">
              <div className="feature-card">
                <span className="feature-icon">🐍</span>
                <h4>Django Backend</h4>
                <p>API RESTful con Django REST Framework</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">⚛️</span>
                <h4>React Frontend</h4>
                <p>Interfaz moderna y reactiva</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">🔄</span>
                <h4>CORS Configurado</h4>
                <p>Comunicación segura entre servidores</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">📦</span>
                <h4>Axios HTTP</h4>
                <p>Cliente HTTP para peticiones API</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <div className="info-box">
              <h4>🔗 Servidores</h4>
              <ul>
                <li><strong>Django Backend:</strong> http://127.0.0.1:8000</li>
                <li><strong>React Frontend:</strong> http://localhost:3000</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="App-footer">
        <p>Desarrollado con ❤️ usando Django + React</p>
      </footer>
    </div>
  );
}

export default App;
