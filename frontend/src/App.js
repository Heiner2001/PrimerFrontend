import React from 'react';
import Tablero from './components/Tablero';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>📋 Tablero Kanban</h1>
        <p>Gestiona tus tareas de manera eficiente</p>
      </header>
      
      <main className="App-main">
        <Tablero />
      </main>
    </div>
  );
}

export default App;