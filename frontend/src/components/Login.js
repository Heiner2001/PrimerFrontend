import { useState, useEffect } from 'react';
import './Login.css';

function Login() {
  // Cargar datos de sesión desde localStorage
  const [logueado, setLogueado] = useState(() => {
    return localStorage.getItem('logueado') === 'true';
  });
  
  const [nombreUsuario, setNombreUsuario] = useState(() => {
    return localStorage.getItem('nombreUsuario') || '';
  });

  const [nombreInput, setNombreInput] = useState('');

  // Guardar estado de sesión en localStorage
  useEffect(() => {
    localStorage.setItem('logueado', logueado);
    if (logueado) {
      localStorage.setItem('nombreUsuario', nombreUsuario);
    }
  }, [logueado, nombreUsuario]);

  const iniciarSesion = () => {
    if (nombreInput.trim() !== '') {
      setNombreUsuario(nombreInput);
      setLogueado(true);
      setNombreInput('');
    }
  };

  const cerrarSesion = () => {
    setLogueado(false);
    setNombreUsuario('');
    localStorage.removeItem('logueado');
    localStorage.removeItem('nombreUsuario');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      iniciarSesion();
    }
  };

  return (
    <div className="login-container">
      {logueado ? (
        <>
          <h2>Bienvenido de nuevo, {nombreUsuario}! 👋</h2>
          <p className="mensaje">Has iniciado sesión correctamente</p>
          <button onClick={cerrarSesion} className="btn-login">
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <h2>Por favor inicia sesión</h2>
          <p className="mensaje">Ingresa tu nombre para acceder a tus tareas</p>
          <input
            type="text"
            placeholder="Escribe tu nombre..."
            value={nombreInput}
            onChange={(e) => setNombreInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-nombre"
          />
          <button onClick={iniciarSesion} className="btn-login">
            Iniciar sesión
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
