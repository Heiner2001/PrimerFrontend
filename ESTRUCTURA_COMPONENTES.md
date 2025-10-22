# 📐 Estructura de Componentes - Gestor de Tareas

## 🌳 Jerarquía de Componentes

```
App.js (Componente Principal)
│
├── Login.js (Componente de Autenticación)
│   └── Maneja el estado de login/logout
│
├── ListaTareas.js (Componente Gestor de Tareas)
│   ├── Formulario de entrada
│   ├── Lista de tareas
│   └── Estadísticas
│       │
│       └── Tarea.js (Componente Individual de Tarea)
│           ├── Texto de la tarea
│           ├── Botón completar
│           └── Botón eliminar
```

## 📂 Estructura de Archivos

```
frontend/
└── src/
    ├── components/
    │   ├── Login.js          ✅ Componente de autenticación
    │   ├── Login.css         🎨 Estilos del login
    │   ├── ListaTareas.js    ✅ Gestor de lista de tareas
    │   ├── ListaTareas.css   🎨 Estilos de la lista
    │   ├── Tarea.js          ✅ Componente de tarea individual
    │   └── Tarea.css         🎨 Estilos de tarea
    ├── App.js                ✅ Componente raíz
    ├── App.css               🎨 Estilos globales
    ├── index.js              🚀 Punto de entrada
    └── index.css             🎨 Estilos base
```

## 🔧 Descripción de Componentes

### 1. **App.js** (Componente Principal)
**Función:** Componente raíz que organiza la aplicación

**Contiene:**
- Header con título de la aplicación
- Componente `Login`
- Componente `ListaTareas`
- Footer

**Props:** Ninguna (es el componente raíz)

```javascript
import Login from './components/Login';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>📋 Gestor de Tareas</h1>
      </header>
      <main>
        <Login />
        <ListaTareas />
      </main>
    </div>
  );
}
```

---

### 2. **Login.js** (Componente de Autenticación)
**Función:** Maneja el estado de autenticación del usuario

**Estado:**
- `logueado` (boolean): Indica si el usuario está logueado

**Funcionalidades:**
- Mostrar mensaje de bienvenida o solicitud de login
- Botón para iniciar/cerrar sesión
- Renderizado condicional según el estado

**Props:** Ninguna

```javascript
const [logueado, setLogueado] = useState(false);
```

---

### 3. **ListaTareas.js** (Componente Gestor de Tareas)
**Función:** Gestiona la lista completa de tareas

**Estado:**
- `tareas` (array): Array de objetos tarea
- `nuevaTarea` (string): Valor del input

**Funcionalidades:**
- Agregar nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Mostrar estadísticas
- Renderizar componentes `Tarea`

**Props:** Ninguna

**Estructura de datos:**
```javascript
tarea = {
  id: 1234567890,
  texto: "Hacer la compra",
  completada: false
}
```

**Funciones principales:**
- `agregarTarea()`: Añade una nueva tarea
- `marcarCompletada(id)`: Cambia el estado de completada
- `eliminarTarea(id)`: Elimina una tarea
- `handleKeyPress(e)`: Detecta Enter para agregar

---

### 4. **Tarea.js** (Componente Individual)
**Función:** Representa una tarea individual en la lista

**Props recibidas:**
- `tarea` (object): Objeto con los datos de la tarea
  - `id`: Identificador único
  - `texto`: Descripción de la tarea
  - `completada`: Estado booleano
- `onCompletar` (function): Callback para marcar completada
- `onEliminar` (function): Callback para eliminar

**Renderiza:**
- Texto de la tarea
- Botón ✓ para completar/descompletar
- Botón 🗑️ para eliminar
- Clases CSS condicionales según el estado

```javascript
<Tarea
  key={tarea.id}
  tarea={tarea}
  onCompletar={marcarCompletada}
  onEliminar={eliminarTarea}
/>
```

---

## 🔄 Flujo de Datos

### Agregar una Tarea
```
Usuario escribe en input
    ↓
Input actualiza estado 'nuevaTarea' (ListaTareas)
    ↓
Usuario presiona "Agregar" o Enter
    ↓
agregarTarea() crea objeto tarea
    ↓
setTareas actualiza el array
    ↓
ListaTareas renderiza componentes Tarea
    ↓
Cada Tarea.js recibe props y se renderiza
```

### Marcar como Completada
```
Usuario hace clic en botón ✓
    ↓
onClick llama onCompletar(tarea.id)
    ↓
ListaTareas ejecuta marcarCompletada(id)
    ↓
map() crea nuevo array con tarea actualizada
    ↓
setTareas actualiza el estado
    ↓
Tarea.js se re-renderiza con nueva clase CSS
```

### Eliminar Tarea
```
Usuario hace clic en botón 🗑️
    ↓
onClick llama onEliminar(tarea.id)
    ↓
ListaTareas ejecuta eliminarTarea(id)
    ↓
filter() crea nuevo array sin la tarea
    ↓
setTareas actualiza el estado
    ↓
Tarea.js se desmonta (desaparece)
```

---

## 🎯 Ventajas de esta Estructura

### ✅ Modularidad
- Cada componente tiene una responsabilidad única
- Fácil de mantener y actualizar

### ✅ Reutilización
- `Tarea.js` es reutilizable para cada tarea
- Se puede usar `Login.js` en otras partes

### ✅ Separación de Concerns
- `App.js`: Estructura general
- `Login.js`: Lógica de autenticación
- `ListaTareas.js`: Lógica de gestión de tareas
- `Tarea.js`: Presentación de tarea individual

### ✅ Props vs State
- State en componentes que necesitan gestionar datos
- Props para pasar datos a componentes hijos

### ✅ Escalabilidad
- Fácil agregar nuevos componentes
- Fácil agregar nuevas funcionalidades

---

## 🎨 Estilos CSS

Cada componente tiene su propio archivo CSS:

- `App.css` → Estilos globales y layout principal
- `Login.css` → Estilos del componente de login
- `ListaTareas.css` → Estilos del gestor de tareas
- `Tarea.css` → Estilos de cada tarea individual

**Ventajas:**
- Organización clara
- Fácil de encontrar estilos
- Sin conflictos de nombres
- Mantenimiento sencillo

---

## 📊 Conceptos React Aplicados

### 1. Componentes Funcionales
```javascript
function App() { ... }
function Login() { ... }
function ListaTareas() { ... }
function Tarea() { ... }
```

### 2. Hooks
```javascript
// useState para estado local
const [logueado, setLogueado] = useState(false);
const [tareas, setTareas] = useState([]);
```

### 3. Props
```javascript
// Pasar props de padre a hijo
<Tarea tarea={tarea} onCompletar={func} onEliminar={func} />

// Recibir props en el hijo
function Tarea({ tarea, onCompletar, onEliminar }) { ... }
```

### 4. Eventos
```javascript
onClick={() => onCompletar(tarea.id)}
onChange={(e) => setNuevaTarea(e.target.value)}
onKeyPress={handleKeyPress}
```

### 5. Renderizado Condicional
```javascript
{logueado ? <Bienvenida /> : <IniciarSesion />}
{tareas.length === 0 ? <MensajeVacio /> : <Lista />}
```

### 6. Listas y Keys
```javascript
{tareas.map((tarea) => (
  <Tarea key={tarea.id} tarea={tarea} />
))}
```

### 7. Inmutabilidad
```javascript
// ❌ Incorrecto (muta el estado)
tareas.push(nuevaTarea);

// ✅ Correcto (crea nuevo array)
setTareas([...tareas, nuevaTarea]);
```

---

## 🚀 Cómo Usar

1. **Instalar dependencias:**
```bash
cd frontend
npm install
```

2. **Ejecutar aplicación:**
```bash
npm start
```

3. **Abrir navegador:**
```
http://localhost:3000
```

---

## 🔮 Posibles Mejoras

### Levantar el Estado (State Lifting)
Compartir el estado de `logueado` entre Login y ListaTareas:
```javascript
// En App.js
const [logueado, setLogueado] = useState(false);

// Pasar como props
<Login logueado={logueado} setLogueado={setLogueado} />
<ListaTareas logueado={logueado} />
```

### Context API
Para evitar prop drilling en aplicaciones grandes:
```javascript
const AuthContext = createContext();
const TareasContext = createContext();
```

### Custom Hooks
Extraer lógica reutilizable:
```javascript
// useTareas.js
function useTareas() {
  const [tareas, setTareas] = useState([]);
  // ... lógica
  return { tareas, agregarTarea, eliminarTarea };
}
```

---

¡Estructura modular, limpia y escalable! 🎉

