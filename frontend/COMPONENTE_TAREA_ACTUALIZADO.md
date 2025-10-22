# 📝 Componente Tarea.js - Actualizado

## 🔧 Estructura del Componente

```javascript
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
```

## 📥 Props Recibidas

El componente recibe **4 props individuales** (no un objeto tarea):

| Prop | Tipo | Descripción |
|------|------|-------------|
| `texto` | `string` | El texto de la tarea a mostrar |
| `completada` | `boolean` | Estado de la tarea (true = completada, false = pendiente) |
| `eliminarTarea` | `function` | Callback para eliminar la tarea |
| `toggleCompletada` | `function` | Callback para cambiar el estado de completada |

## 🔄 Cómo se Pasa desde ListaTareas.js

```javascript
{tareas.map((tarea) => (
  <Tarea
    key={tarea.id}
    texto={tarea.texto}
    completada={tarea.completada}
    eliminarTarea={() => eliminarTarea(tarea.id)}
    toggleCompletada={() => marcarCompletada(tarea.id)}
  />
))}
```

### Explicación:

1. **`texto={tarea.texto}`** - Pasa solo el texto de la tarea
2. **`completada={tarea.completada}`** - Pasa el estado booleano
3. **`eliminarTarea={() => eliminarTarea(tarea.id)}`** - Arrow function que ejecuta la función del padre con el id específico
4. **`toggleCompletada={() => marcarCompletada(tarea.id)}`** - Arrow function que ejecuta la función del padre con el id específico

## 🎨 Estilos

### Estilo Inline
- **`textDecoration`**: Se aplica directamente en el JSX
  - Si `completada === true` → `'line-through'` (texto tachado)
  - Si `completada === false` → `'none'` (texto normal)

### Estilos CSS Externos (Tarea.css)
- Layout del `<li>`
- Estilos de botones (colores, hover, transiciones)
- Animaciones de aparición

## 💡 Ventajas de esta Estructura

### ✅ **Props Simples**
- Recibe valores primitivos (`texto`, `completada`)
- Más fácil de entender qué datos necesita

### ✅ **Componente de Presentación Puro**
- No tiene lógica compleja
- Solo renderiza y ejecuta callbacks

### ✅ **Desestructuración Clara**
- Las props están explícitas en la firma de la función
- Fácil ver qué necesita el componente

### ✅ **Callbacks Pre-configurados**
- Los callbacks ya vienen con el `id` vinculado
- `Tarea.js` solo necesita ejecutarlos con `onClick`

## 🔄 Flujo de Eventos

### Marcar como Completada:
```
Usuario click en ✔
    ↓
onClick ejecuta toggleCompletada()
    ↓
Se ejecuta () => marcarCompletada(tarea.id) en ListaTareas
    ↓
marcarCompletada(id) actualiza el estado
    ↓
ListaTareas re-renderiza
    ↓
Tarea recibe completada con nuevo valor
    ↓
span actualiza textDecoration (tachado o no)
```

### Eliminar Tarea:
```
Usuario click en ❌
    ↓
onClick ejecuta eliminarTarea()
    ↓
Se ejecuta () => eliminarTarea(tarea.id) en ListaTareas
    ↓
eliminarTarea(id) filtra el array
    ↓
ListaTareas re-renderiza
    ↓
Tarea se desmonta (desaparece)
```

## 📊 Comparación con Estructura Anterior

### ❌ Estructura Anterior:
```javascript
function Tarea({ tarea, onCompletar, onEliminar }) {
  return (
    <li onClick={() => onCompletar(tarea.id)}>
      {tarea.texto}
    </li>
  );
}

// Uso:
<Tarea 
  tarea={tarea} 
  onCompletar={marcarCompletada} 
  onEliminar={eliminarTarea} 
/>
```

### ✅ Estructura Nueva (Actual):
```javascript
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

// Uso:
<Tarea 
  texto={tarea.texto}
  completada={tarea.completada}
  eliminarTarea={() => eliminarTarea(tarea.id)}
  toggleCompletada={() => marcarCompletada(tarea.id)}
/>
```

### Diferencias Clave:

| Aspecto | Anterior | Nueva |
|---------|----------|-------|
| **Props** | Objeto completo `tarea` | Props individuales (`texto`, `completada`) |
| **Callbacks** | Pasados como función | Arrow functions con `id` vinculado |
| **Ejecución** | Componente llama con `tarea.id` | Componente solo ejecuta la función |
| **Responsabilidad** | Sabe sobre estructura de `tarea` | Solo conoce valores primitivos |

## 🎯 Ventajas de la Nueva Estructura

1. **Menos Acoplamiento**: `Tarea.js` no necesita saber la estructura del objeto `tarea`
2. **Props Explícitas**: Claro qué datos necesita el componente
3. **Callbacks Simplificados**: No necesita pasar el `id` desde el componente
4. **Más Funcional**: Componente puro que recibe valores y ejecuta funciones

## 🧪 Ejemplo de Uso Completo

```javascript
// ListaTareas.js
import { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Comprar leche', completada: false },
    { id: 2, texto: 'Estudiar React', completada: true }
  ]);

  const marcarCompletada = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <ul>
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
  );
}
```

## 🎨 Resultado Visual

```
┌──────────────────────────────────────────────────┐
│  Comprar leche             [✔] [❌]              │  ← Pendiente
│  Estudiar React            [✔] [❌]              │  ← Completada (tachada)
│  ─────────────                                   │
└──────────────────────────────────────────────────┘
```

## 📝 Notas Importantes

1. **Arrow Functions en map()**: Necesarias para vincular el `id` específico
2. **Estilo Inline vs CSS**: `textDecoration` está inline, el resto en CSS
3. **Key Prop**: Siempre usar `key={tarea.id}` en el map
4. **Botones**: Usa emojis ✔ y ❌ directamente en el JSX

---

¡Componente actualizado y listo para usar! 🎉

