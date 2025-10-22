import React from 'react';
import Login from './components/Login';
import ListaTareas from './components/ListaTareas';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>📋 Gestor de Tareas</h1>
        <p>Organiza tu día de manera eficiente</p>
      </header>
      
      <main className="App-main">
        <Login />
        <ListaTareas />
      </main>

      <footer className="App-footer">
        <p>Desarrollado con React ⚛️ | © 2025</p>
      </footer>
    </div>
  );
}

export default App;
