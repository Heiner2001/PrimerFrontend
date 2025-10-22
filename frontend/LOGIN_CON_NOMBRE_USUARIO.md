# 👤 Login con Nombre de Usuario - Documentación

## ✨ Funcionalidades Implementadas

El componente `Login.js` ahora incluye:

1. ✅ **Campo de texto** para ingresar el nombre del usuario
2. ✅ **Validación** de que el nombre no esté vacío
3. ✅ **Personalización** del mensaje de bienvenida con el nombre
4. ✅ **Persistencia** del nombre y sesión en localStorage
5. ✅ **Atajo de teclado** (Enter) para iniciar sesión
6. ✅ **Cierre de sesión** que limpia todos los datos

## 🔧 Código Implementado

### Estados Gestionados

```javascript
// Estado de sesión (carga desde localStorage)
const [logueado, setLogueado] = useState(() => {
  return localStorage.getItem('logueado') === 'true';
});

// Nombre del usuario guardado (carga desde localStorage)
const [nombreUsuario, setNombreUsuario] = useState(() => {
  return localStorage.getItem('nombreUsuario') || '';
});

// Input temporal para escribir el nombre
const [nombreInput, setNombreInput] = useState('');
```

### Funciones Principales

#### 1. Iniciar Sesión
```javascript
const iniciarSesion = () => {
  if (nombreInput.trim() !== '') {
    setNombreUsuario(nombreInput);
    setLogueado(true);
    setNombreInput('');
  }
};
```

**Validaciones:**
- No permite nombres vacíos
- Elimina espacios en blanco con `trim()`
- Limpia el input después de iniciar sesión

#### 2. Cerrar Sesión
```javascript
const cerrarSesion = () => {
  setLogueado(false);
  setNombreUsuario('');
  localStorage.removeItem('logueado');
  localStorage.removeItem('nombreUsuario');
};
```

**Limpieza completa:**
- Cambia el estado de `logueado` a false
- Limpia el nombre del usuario
- Elimina datos de localStorage

#### 3. Atajo de Teclado
```javascript
const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    iniciarSesion();
  }
};
```

**Ventaja:** El usuario puede presionar Enter sin necesidad de hacer clic en el botón.

### Persistencia con localStorage

```javascript
useEffect(() => {
  localStorage.setItem('logueado', logueado);
  if (logueado) {
    localStorage.setItem('nombreUsuario', nombreUsuario);
  }
}, [logueado, nombreUsuario]);
```

**Datos guardados:**
- `'logueado'`: Estado de sesión ('true' o 'false')
- `'nombreUsuario'`: Nombre del usuario (string)

## 🎨 Interfaz de Usuario

### Vista NO Logueado
```
┌──────────────────────────────────────┐
│    Por favor inicia sesión           │
│                                      │
│ Ingresa tu nombre para acceder a    │
│         tus tareas                   │
│                                      │
│  ┌────────────────────────────────┐ │
│  │ Escribe tu nombre...           │ │
│  └────────────────────────────────┘ │
│                                      │
│  ┌────────────────────────────────┐ │
│  │      Iniciar sesión            │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
```

### Vista Logueado
```
┌──────────────────────────────────────┐
│  Bienvenido de nuevo, Juan! 👋       │
│                                      │
│  Has iniciado sesión correctamente  │
│                                      │
│  ┌────────────────────────────────┐ │
│  │      Cerrar sesión             │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
```

## 🔄 Flujo Completo

### Primera Vez (Sin datos guardados)

```
Usuario abre la aplicación
    ↓
localStorage.getItem('logueado') → null
    ↓
logueado = false
    ↓
Muestra formulario de inicio de sesión
    ↓
Usuario escribe su nombre: "Juan"
    ↓
Usuario presiona Enter o click en "Iniciar sesión"
    ↓
iniciarSesion() valida que no esté vacío
    ↓
setNombreUsuario("Juan")
setLogueado(true)
    ↓
useEffect guarda en localStorage:
  - logueado: 'true'
  - nombreUsuario: 'Juan'
    ↓
Muestra: "Bienvenido de nuevo, Juan! 👋"
```

### Recarga de Página (Con sesión activa)

```
Usuario recarga la página (F5)
    ↓
useState ejecuta función inicializadora
    ↓
localStorage.getItem('logueado') → 'true'
localStorage.getItem('nombreUsuario') → 'Juan'
    ↓
logueado = true
nombreUsuario = 'Juan'
    ↓
Automáticamente muestra:
"Bienvenido de nuevo, Juan! 👋"
    ↓
Usuario sigue logueado sin necesidad de reingresar datos
```

### Cerrar Sesión

```
Usuario hace clic en "Cerrar sesión"
    ↓
cerrarSesion() ejecuta:
  - setLogueado(false)
  - setNombreUsuario('')
  - localStorage.removeItem('logueado')
  - localStorage.removeItem('nombreUsuario')
    ↓
Vuelve a mostrar formulario de inicio de sesión
    ↓
Todos los datos de sesión eliminados
```

## 📊 Datos en localStorage

### Estructura de Datos

```javascript
// Cuando el usuario está logueado:
localStorage = {
  'logueado': 'true',
  'nombreUsuario': 'Juan',
  'tareas': '[{"id":1,"texto":"Comprar leche","completada":false}]'
}

// Cuando el usuario cierra sesión:
localStorage = {
  'tareas': '[{"id":1,"texto":"Comprar leche","completada":false}]'
}
// (Las tareas se mantienen, solo se elimina la sesión)
```

### Ver en DevTools

1. Abre DevTools (F12)
2. Ve a **Application** → **Local Storage**
3. Selecciona `http://localhost:3000`
4. Verás las keys: `logueado`, `nombreUsuario`, `tareas`

## 🎨 Estilos CSS Agregados

### Input de Nombre
```css
.input-nombre {
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s;
  margin-bottom: 15px;
}

.input-nombre:focus {
  border-color: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.2);
}
```

**Características:**
- Borde gris claro por defecto
- Al hacer focus, borde morado con sombra
- Placeholder con color gris claro
- Responsive y con padding cómodo

## ✅ Validaciones Implementadas

### 1. Nombre Vacío
```javascript
if (nombreInput.trim() !== '') {
  // Solo permite iniciar sesión si hay texto
}
```

**Previene:**
- Nombres con solo espacios en blanco
- Campos vacíos

### 2. Persistencia Condicional
```javascript
if (logueado) {
  localStorage.setItem('nombreUsuario', nombreUsuario);
}
```

**Asegura:**
- Solo guarda el nombre cuando hay sesión activa
- Evita guardar strings vacíos

## 🧪 Pruebas Sugeridas

### Test 1: Login Básico
```
1. Escribe tu nombre en el input
2. Haz clic en "Iniciar sesión"
3. ✓ Debe mostrar: "Bienvenido de nuevo, [TuNombre]! 👋"
```

### Test 2: Validación de Campo Vacío
```
1. Deja el input vacío
2. Haz clic en "Iniciar sesión"
3. ✓ No debe permitir iniciar sesión
```

### Test 3: Atajo de Teclado
```
1. Escribe tu nombre
2. Presiona Enter (sin hacer clic)
3. ✓ Debe iniciar sesión
```

### Test 4: Persistencia
```
1. Inicia sesión con tu nombre
2. Recarga la página (F5)
3. ✓ Debe seguir mostrando tu nombre y estar logueado
```

### Test 5: Cerrar Sesión
```
1. Estando logueado, haz clic en "Cerrar sesión"
2. ✓ Debe volver al formulario de login
3. ✓ El input debe estar vacío
```

### Test 6: Espacios en Blanco
```
1. Escribe solo espacios en el input: "   "
2. Haz clic en "Iniciar sesión"
3. ✓ No debe permitir iniciar sesión (trim() lo previene)
```

### Test 7: Persistencia después de Cerrar Sesión
```
1. Inicia sesión
2. Cierra sesión
3. Recarga la página
4. ✓ Debe mostrar el formulario de login (no debe estar logueado)
```

## 💡 Conceptos React Aplicados

### 1. Múltiples Estados
```javascript
const [logueado, setLogueado] = useState(false);
const [nombreUsuario, setNombreUsuario] = useState('');
const [nombreInput, setNombreInput] = useState('');
```

**Razón para 3 estados:**
- `logueado`: Estado de sesión (boolean)
- `nombreUsuario`: Nombre guardado (string persistente)
- `nombreInput`: Valor temporal del input (string temporal)

### 2. Lazy Initial State
```javascript
const [logueado, setLogueado] = useState(() => {
  return localStorage.getItem('logueado') === 'true';
});
```

**Ventaja:** Solo lee localStorage una vez al montar el componente.

### 3. useEffect con Múltiples Dependencias
```javascript
useEffect(() => {
  // Se ejecuta cuando cambia logueado O nombreUsuario
}, [logueado, nombreUsuario]);
```

### 4. Controlled Input
```javascript
<input
  value={nombreInput}
  onChange={(e) => setNombreInput(e.target.value)}
/>
```

**Ventaja:** React controla el valor del input.

### 5. Event Handlers
```javascript
onClick={iniciarSesion}
onKeyPress={handleKeyPress}
onChange={(e) => setNombreInput(e.target.value)}
```

## 🚀 Mejoras Futuras Opcionales

### 1. Avatar o Imagen de Perfil
```javascript
const [avatarUrl, setAvatarUrl] = useState('');
```

### 2. Múltiples Usuarios
```javascript
const usuarios = [
  { nombre: 'Juan', tareas: [...] },
  { nombre: 'María', tareas: [...] }
];
```

### 3. Validación de Longitud
```javascript
if (nombreInput.length < 2 || nombreInput.length > 20) {
  alert('El nombre debe tener entre 2 y 20 caracteres');
  return;
}
```

### 4. Caracteres Especiales
```javascript
const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
if (!regex.test(nombreInput)) {
  alert('Solo se permiten letras');
  return;
}
```

### 5. Mensaje de Error Visual
```javascript
const [error, setError] = useState('');

// En el render:
{error && <p className="error-mensaje">{error}</p>}
```

## 📱 Responsive

El componente es completamente responsive:

```css
@media (max-width: 600px) {
  .login-container {
    margin: 10px;
    padding: 20px;
  }
  
  .login-container h2 {
    font-size: 1.5em;
  }
}
```

## 🔐 Consideraciones de Seguridad

⚠️ **Importante:**
- Esta es una implementación básica para demostración
- localStorage **no es seguro** para datos sensibles
- No uses esto para almacenar contraseñas o tokens reales
- Para producción, usa autenticación del lado del servidor

## 📝 Resumen de Cambios

### Login.js
- ✅ Agregado campo de texto para nombre
- ✅ Implementada validación de campo vacío
- ✅ Mensaje personalizado con nombre del usuario
- ✅ Persistencia en localStorage
- ✅ Atajo de teclado (Enter)
- ✅ Función de cerrar sesión mejorada

### Login.css
- ✅ Estilos para el input de nombre
- ✅ Estados hover y focus
- ✅ Placeholder estilizado
- ✅ Responsive design
- ✅ Estado disabled para el botón

---

¡Tu componente Login ahora es personalizado y persistente! 👤✨

