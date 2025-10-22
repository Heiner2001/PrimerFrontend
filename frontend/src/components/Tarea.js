import './Tarea.css';

function Tarea({ texto, completada, eliminarTarea, toggleCompletada }) {
  return (
    <li>
      <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        {texto}
      </span>
      <button onClick={toggleCompletada}>✔</button>
      <button onClick={eliminarTarea}>❌</button>
    </li>
  );
}

export default Tarea;
