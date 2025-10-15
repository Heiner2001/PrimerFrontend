import { useState } from 'react';
import './Contador.css';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador-container">
      <h3>Contador: {contador}</h3>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
}

export default Contador;

