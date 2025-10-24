# 📋 Tablero Kanban - Componente React

## 🎯 Descripción

El componente `Tablero.js` es un tablero Kanban que permite gestionar tareas organizándolas en tres columnas: **Pendiente**, **En Progreso** y **Finalizado**. Está diseñado exactamente como se muestra en la imagen proporcionada, con colores específicos y funcionalidades completas.

## 🎨 Características Visuales

### Colores Exactos de la Imagen
- **Fondo General**: `#5C2D8C` (Morado oscuro)
- **Columna Pendiente**: 
  - Header: `#6B5700` (Oliva oscuro)
  - Texto: `#F0D880` (Amarillo claro)
- **Columna En Progreso**: 
  - Header: `#1A522D` (Verde oscuro)
  - Texto: `#80F0A0` (Verde claro)
- **Columna Finalizado**: 
  - Header: `#1A1A1A` (Negro)
  - Texto: `#E0E0E0` (Gris claro)
- **Tarjetas de Tareas**: `#2D2D30` (Gris oscuro)

## 🚀 Funcionalidades

### ✅ Gestión de Tareas
- **Agregar Tareas**: Input en cada columna para agregar nuevas tareas
- **Mover Tareas**: Botones de flecha para mover tareas entre columnas
- **Eliminar Tareas**: Botón "×" para eliminar tareas
- **Persistencia**: Las tareas se mantienen durante la sesión

### 🎯 Interacciones
- **Hover Effects**: Animaciones suaves al pasar el mouse
- **Responsive**: Adaptable a dispositivos móviles
- **Keyboard Support**: Enter para agregar tareas

## 📁 Estructura de Archivos

```
frontend/src/components/
├── Tablero.js          # Componente principal
├── Tablero.css         # Estilos específicos
└── tablero-demo.html   # Demo funcional en HTML puro
```

## 🔧 Uso del Componente

### Importación
```javascript
import Tablero from './components/Tablero';
import './components/Tablero.css';
```

### Implementación
```javascript
function App() {
  return (
    <div className="App">
      <header>
        <h1>📋 Tablero Kanban</h1>
        <p>Gestiona tus tareas de manera eficiente</p>
      </header>
      
      <main>
        <Tablero />
      </main>
    </div>
  );
}
```

## 🎨 Personalización

### Modificar Colores
Los colores se pueden personalizar en `Tablero.css`:

```css
.tablero-container {
  background: #5C2D8C; /* Cambiar color de fondo */
}

.columna-pendiente .columna-header {
  background: #6B5700; /* Cambiar color del header pendiente */
}
```

### Agregar Nuevas Columnas
Para agregar más columnas, modifica el estado inicial en `Tablero.js`:

```javascript
const [tareas, setTareas] = useState({
  pendiente: ['Tarea #3', 'Tarea #4', 'Tarea #5'],
  progreso: ['Tarea #1'],
  completada: ['Tarea #2'],
  nuevaColumna: [] // Agregar nueva columna
});
```

## 📱 Responsive Design

El componente está optimizado para:
- **Desktop**: Layout horizontal con 3 columnas
- **Tablet**: Layout adaptativo
- **Mobile**: Layout vertical apilado

## 🧪 Demo en Vivo

Para ver el tablero en funcionamiento, abre `tablero-demo.html` en tu navegador. Este archivo contiene una implementación completa en HTML/CSS/JavaScript que replica exactamente el diseño de la imagen.

## 🔄 Estado de las Tareas

El componente maneja el estado de las tareas con React hooks:

```javascript
const [tareas, setTareas] = useState({
  pendiente: ['Tarea #3', 'Tarea #4', 'Tarea #5'],
  progreso: ['Tarea #1'],
  completada: ['Tarea #2']
});
```

## 🎯 Próximas Mejoras

- [ ] Persistencia en localStorage
- [ ] Drag & Drop para mover tareas
- [ ] Edición inline de tareas
- [ ] Filtros y búsqueda
- [ ] Temas personalizables
- [ ] Exportación de datos

## 📋 Instrucciones de Instalación

1. Copia `Tablero.js` y `Tablero.css` a tu proyecto React
2. Importa el componente en tu aplicación
3. Asegúrate de que los estilos CSS estén incluidos
4. ¡Disfruta de tu tablero Kanban!

## 🎉 ¡Listo para Usar!

El componente Tablero está completamente funcional y listo para integrarse en tu aplicación React. Mantiene el diseño exacto de la imagen proporcionada y ofrece todas las funcionalidades necesarias para gestionar tareas de manera eficiente.