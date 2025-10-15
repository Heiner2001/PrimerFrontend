import { useState } from 'react';
import './SaludoPersonalizado.css';

function SaludoPersonalizado() {
  const [nombre, setNombre] = useState('');

  return (
    <div className="saludo-personalizado">
      <input
        type="text"
        placeholder="Escribe tu nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <h2>Hola {nombre || 'visitante'} 👋</h2>
    </div>
  );
}

export default SaludoPersonalizado;

