import { useState } from 'react';
import './Columna.css';

function Columna({ titulo, tareas, setTareas, estado }) {
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas(prevTareas => ({
        ...prevTareas,
        [estado]: [...prevTareas[estado], nuevaTarea.trim()]
      }));
      setNuevaTarea('');
    }
  };

  const moverTarea = (direccion, indice) => {
    setTareas(prevTareas => {
      const tareasActuales = [...prevTareas[estado]];
      const tarea = tareasActuales.splice(indice, 1)[0];
      
      let nuevoEstado;
      if (direccion === 'izquierda') {
        if (estado === 'progreso') nuevoEstado = 'pendiente';
        else if (estado === 'completada') nuevoEstado = 'progreso';
      } else if (direccion === 'derecha') {
        if (estado === 'pendiente') nuevoEstado = 'progreso';
        else if (estado === 'progreso') nuevoEstado = 'completada';
      }
      
      if (nuevoEstado) {
        return {
          ...prevTareas,
          [estado]: tareasActuales,
          [nuevoEstado]: [...prevTareas[nuevoEstado], tarea]
        };
      }
      return prevTareas;
    });
  };

  const eliminarTarea = (indice) => {
    setTareas(prevTareas => ({
      ...prevTareas,
      [estado]: prevTareas[estado].filter((_, i) => i !== indice)
    }));
  };

  const getEstiloColumna = () => {
    switch (estado) {
      case 'pendiente':
        return {
          headerColor: '#8b6914', // Mustard/dorado oscuro
          textColor: '#ffd700', // Dorado claro
          contentColor: '#404040' // Gris oscuro
        };
      case 'progreso':
        return {
          headerColor: '#0f5132', // Verde oscuro
          textColor: '#90ee90', // Verde claro
          contentColor: '#404040' // Gris oscuro
        };
      case 'completada':
        return {
          headerColor: '#1a1a1a', // Negro/gris muy oscuro
          textColor: '#ffffff', // Blanco
          contentColor: '#404040' // Gris oscuro
        };
      default:
        return {
          headerColor: '#404040',
          textColor: '#ffffff',
          contentColor: '#404040'
        };
    }
  };

  const estilos = getEstiloColumna();

  return (
    <div className="columna" style={{ backgroundColor: estilos.contentColor }}>
      {/* Header */}
      <div 
        className="columna-header" 
        style={{ backgroundColor: estilos.headerColor }}
      >
        <h3 style={{ color: estilos.textColor, margin: 0 }}>{titulo}</h3>
        <div className="header-icons" style={{ color: estilos.textColor }}>
          <span className="icon">↔</span>
          <span className="icon">⋯</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="columna-content">
        {tareas.map((tarea, index) => (
          <div key={index} className="tarea-card">
            <span className="tarea-texto">{tarea}</span>
            <div className="tarea-actions">
              {estado !== 'pendiente' && (
                <button 
                  className="btn-mover"
                  onClick={() => moverTarea('izquierda', index)}
                  title="Mover a la izquierda"
                >
                  ←
                </button>
              )}
              {estado !== 'completada' && (
                <button 
                  className="btn-mover"
                  onClick={() => moverTarea('derecha', index)}
                  title="Mover a la derecha"
                >
                  →
                </button>
              )}
              <button 
                className="btn-eliminar"
                onClick={() => eliminarTarea(index)}
                title="Eliminar tarea"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer - Add Card */}
      <div 
        className="columna-footer" 
        style={{ backgroundColor: estilos.headerColor }}
      >
        <span style={{ color: estilos.textColor }}>+ Añade una tarjeta</span>
        <span className="monitor-icon" style={{ color: estilos.textColor }}>🖥️</span>
      </div>

      {/* Input para agregar nueva tarea */}
      <div className="agregar-tarea-container">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
          placeholder="Escribe una nueva tarea..."
          className="input-nueva-tarea"
        />
        <button onClick={agregarTarea} className="btn-agregar">
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Columna;
