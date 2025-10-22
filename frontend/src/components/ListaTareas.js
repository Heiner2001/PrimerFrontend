import { useState, useEffect } from 'react';
import Tarea from './Tarea';
import './ListaTareas.css';

function ListaTareas() {
  // Cargar tareas desde localStorage al iniciar
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

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
    <div className="lista-tareas-container">
      <h2>Lista de Tareas 📝</h2>
      
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
        <>
          <ul className="lista-tareas">
            {tareas.map((tarea) => (
              <Tarea
                key={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={() => eliminarTarea(tarea.id)}
                toggleCompletada={() => marcarCompletada(tarea.id)}
              />
            ))}
          </ul>

          <div className="estadisticas">
            <p>
              Total: {tareas.length} | Completadas: {tareas.filter(t => t.completada).length} | 
              Pendientes: {tareas.filter(t => !t.completada).length}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ListaTareas;
