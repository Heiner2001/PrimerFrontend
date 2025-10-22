# 📋 Gestor de Tareas - Aplicación React

Una aplicación moderna y funcional para gestionar tus tareas diarias.

## ✨ Características

- ✅ **Agregar tareas**: Formulario con campo de texto y botón para añadir nuevas tareas
- ✅ **Marcar como completada**: Cada tarea tiene un botón para marcarla como completada/pendiente
- ✅ **Eliminar tareas**: Botón para eliminar tareas individuales
- ✅ **Mensaje de lista vacía**: Muestra "No tienes tareas pendientes" cuando no hay tareas
- ✅ **Estadísticas**: Contador de tareas totales, completadas y pendientes
- ✅ **Diseño moderno**: Interfaz atractiva con gradientes y animaciones
- ✅ **Responsive**: Adaptable a dispositivos móviles

## 🚀 Instalación y Uso

### Instalar dependencias

```bash
cd frontend
npm install
```

### Ejecutar la aplicación

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

### Construir para producción

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GestorTareas.js      # Componente principal
│   │   ├── GestorTareas.css     # Estilos del gestor
│   │   ├── Login.js             # Componente de login
│   │   └── ListaTareas.js       # Componente básico de lista
│   ├── App.js                    # Componente raíz
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎯 Funcionalidades Implementadas

### 1. Formulario de Tareas
- Campo de texto para escribir la tarea
- Botón "Agregar" para añadir la tarea a la lista
- Validación: no permite tareas vacías
- Presiona Enter para agregar rápidamente

### 2. Lista de Tareas
- Muestra todas las tareas agregadas
- Cada tarea se muestra con su texto y botones de acción
- Animaciones suaves al agregar/eliminar tareas

### 3. Acciones por Tarea
- **✓ Completar**: Marca la tarea como completada (tachada y con fondo verde claro)
- **🗑️ Eliminar**: Elimina permanentemente la tarea de la lista

### 4. Mensaje de Lista Vacía
- Cuando no hay tareas, se muestra: **"No tienes tareas pendientes"**

### 5. Estadísticas
- Contador de tareas totales
- Contador de tareas completadas
- Contador de tareas pendientes

## 🎨 Diseño

- **Colores**: Gradiente morado-azul (#667eea → #764ba2)
- **Tipografía**: Segoe UI y fuentes del sistema
- **Efectos**: Sombras, animaciones y transiciones suaves
- **Responsive**: Diseño adaptable para móviles y tablets

## 🛠️ Tecnologías Utilizadas

- React 18.2
- React Hooks (useState)
- CSS3 con animaciones y gradientes
- HTML5

## 📝 Componentes Adicionales

Además del **GestorTareas**, se incluyen componentes de ejemplo:

- **Login.js**: Sistema de autenticación simple con estado
- **ListaTareas.js**: Versión básica de lista de tareas

## 🔄 Estados Gestionados

El componente usa el hook `useState` para gestionar:

1. **tareas**: Array de objetos con la estructura:
   ```javascript
   {
     id: timestamp,
     texto: string,
     completada: boolean
   }
   ```

2. **nuevaTarea**: String con el valor del input

## 🎯 Próximas Mejoras (Opcionales)

- [ ] Persistencia con LocalStorage
- [ ] Editar tareas existentes
- [ ] Filtros (Todas/Completadas/Pendientes)
- [ ] Drag and drop para reordenar
- [ ] Fechas de vencimiento
- [ ] Categorías de tareas

---

¡Disfruta gestionando tus tareas! 🎉

