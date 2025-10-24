import { useState } from 'react';
import Columna from './Columna';
import './Tablero.css';

function Tablero() {
  const [tareas, setTareas] = useState({
    pendiente: ['Tarea #3', 'Tarea #4', 'Tarea #5'],
    progreso: ['Tarea #1'],
    completada: ['Tarea #2']
  });

  return (
    <div className="tablero-container">
      <Columna 
        titulo="Pendiente" 
        tareas={tareas.pendiente} 
        setTareas={setTareas} 
        estado="pendiente" 
      />
      <Columna 
        titulo="En Progreso" 
        tareas={tareas.progreso} 
        setTareas={setTareas} 
        estado="progreso" 
      />
      <Columna 
        titulo="Finalizado" 
        tareas={tareas.completada} 
        setTareas={setTareas} 
        estado="completada" 
      />
    </div>
  );
}

export default Tablero;
