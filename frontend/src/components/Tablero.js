import { useState } from 'react';
import './Tablero.css';

function Tablero() {
  const [tareas, setTareas] = useState({
    pendiente: ['Tarea #3', 'Tarea #4', 'Tarea #5'],
    progreso: ['Tarea #1'],
    completada: ['Tarea #2']
  });

  const agregarTarea = (estado, texto) => {
    if (texto.trim() !== '') {
      setTareas(prevTareas => ({
        ...prevTareas,
        [estado]: [...prevTareas[estado], texto.trim()]
      }));
    }
  };

  const moverTarea = (estadoOrigen, indice, direccion) => {
    setTareas(prevTareas => {
      const tareasActuales = [...prevTareas[estadoOrigen]];
      const tarea = tareasActuales.splice(indice, 1)[0];
      
      let nuevoEstado;
      if (direccion === 'izquierda') {
        if (estadoOrigen === 'progreso') nuevoEstado = 'pendiente';
        else if (estadoOrigen === 'completada') nuevoEstado = 'progreso';
      } else if (direccion === 'derecha') {
        if (estadoOrigen === 'pendiente') nuevoEstado = 'progreso';
        else if (estadoOrigen === 'progreso') nuevoEstado = 'completada';
      }
      
      if (nuevoEstado) {
        return {
          ...prevTareas,
          [estadoOrigen]: tareasActuales,
          [nuevoEstado]: [...prevTareas[nuevoEstado], tarea]
        };
      }
      return prevTareas;
    });
  };

  const eliminarTarea = (estado, indice) => {
    setTareas(prevTareas => ({
      ...prevTareas,
      [estado]: prevTareas[estado].filter((_, i) => i !== indice)
    }));
  };

  const Columna = ({ titulo, estado, tareas }) => {
    const [nuevaTarea, setNuevaTarea] = useState('');
    
    const getEstiloColumna = () => {
      switch (estado) {
        case 'pendiente':
          return {
            headerColor: '#6B5700',
            textColor: '#F0D880'
          };
        case 'progreso':
          return {
            headerColor: '#1A522D',
            textColor: '#80F0A0'
          };
        case 'completada':
          return {
            headerColor: '#1A1A1A',
            textColor: '#E0E0E0'
          };
        default:
          return {
            headerColor: '#404040',
            textColor: '#ffffff'
          };
      }
    };

    const estilos = getEstiloColumna();

    return (
      <div className="columna" style={{ backgroundColor: '#2D2D30' }}>
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
                    onClick={() => moverTarea(estado, index, 'izquierda')}
                    title="Mover a la izquierda"
                  >
                    ←
                  </button>
                )}
                {estado !== 'completada' && (
                  <button 
                    className="btn-mover"
                    onClick={() => moverTarea(estado, index, 'derecha')}
                    title="Mover a la derecha"
                  >
                    →
                  </button>
                )}
                <button 
                  className="btn-eliminar"
                  onClick={() => eliminarTarea(estado, index)}
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
            onKeyPress={(e) => e.key === 'Enter' && (agregarTarea(estado, nuevaTarea), setNuevaTarea(''))}
            placeholder="Escribe una nueva tarea..."
            className="input-nueva-tarea"
          />
          <button 
            onClick={() => {
              agregarTarea(estado, nuevaTarea);
              setNuevaTarea('');
            }} 
            className="btn-agregar"
          >
            Agregar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="tablero-container">
      <Columna 
        titulo="Pendiente" 
        estado="pendiente"
        tareas={tareas.pendiente} 
      />
      <Columna 
        titulo="En Progreso" 
        estado="progreso"
        tareas={tareas.progreso} 
      />
      <Columna 
        titulo="Finalizado" 
        estado="completada"
        tareas={tareas.completada} 
      />
    </div>
  );
}

export default Tablero;