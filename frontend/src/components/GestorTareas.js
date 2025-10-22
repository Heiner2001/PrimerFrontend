import { useState } from 'react';
import './GestorTareas.css';

function GestorTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      const tarea = {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false
      };
      setTareas([...tareas, tarea]);
      setNuevaTarea('');
    }
  };

  const marcarCompletada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      agregarTarea();
    }
  };

  return (
    <div className="gestor-tareas">
      <h1>📋 Gestor de Tareas</h1>
      
      <div className="formulario">
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={handleKeyPress}
          className="input-tarea"
        />
        <button onClick={agregarTarea} className="btn-agregar">
          Agregar
        </button>
      </div>

      {tareas.length === 0 ? (
        <p className="mensaje-vacio">No tienes tareas pendientes</p>
      ) : (
        <ul className="lista-tareas">
          {tareas.map((tarea) => (
            <li key={tarea.id} className={`tarea-item ${tarea.completada ? 'completada' : ''}`}>
              <span className="tarea-texto">{tarea.texto}</span>
              <div className="botones">
                <button
                  onClick={() => marcarCompletada(tarea.id)}
                  className="btn-completar"
                  title={tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada'}
                >
                  {tarea.completada ? '↩️' : '✓'}
                </button>
                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  className="btn-eliminar"
                  title="Eliminar tarea"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {tareas.length > 0 && (
        <div className="estadisticas">
          <p>
            Total: {tareas.length} | Completadas: {tareas.filter(t => t.completada).length} | 
            Pendientes: {tareas.filter(t => !t.completada).length}
          </p>
        </div>
      )}
    </div>
  );
}

export default GestorTareas;

