# 📋 Gestor de Tareas - Aplicación Full Stack

Una aplicación completa de gestión de tareas construida con **Django** (Backend) y **React** (Frontend) con persistencia en localStorage.

![GitHub](https://img.shields.io/badge/GitHub-PrimerFrontend-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Django](https://img.shields.io/badge/Django-5.2.7-green)

## 🌐 Ver en GitHub

**Repositorio:** [https://github.com/Heiner2001/PrimerFrontend](https://github.com/Heiner2001/PrimerFrontend)

---

## ✨ Características Principales

### 🎯 Sistema de Login
- ✅ Campo de texto para nombre de usuario
- ✅ Mensaje personalizado: "Bienvenido de nuevo, [Nombre]! 👋"
- ✅ Persistencia de sesión con localStorage
- ✅ Validación de campos vacíos
- ✅ Atajo de teclado (Enter)

### 📝 Gestor de Tareas
- ✅ Agregar tareas con formulario
- ✅ Marcar tareas como completadas (tachado)
- ✅ Eliminar tareas individuales
- ✅ Mensaje cuando no hay tareas: "No tienes tareas pendientes"
- ✅ Estadísticas en tiempo real (Total, Completadas, Pendientes)
- ✅ Persistencia automática en localStorage

### 💾 Persistencia de Datos
- ✅ Las tareas se guardan automáticamente
- ✅ Los datos persisten al recargar la página
- ✅ La sesión se mantiene entre visitas

### 🎨 Diseño Moderno
- ✅ Interfaz hermosa con gradientes morado-azul
- ✅ Animaciones y transiciones suaves
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Efectos hover y focus

---

## 📁 Estructura del Proyecto

```
PrimerFronted/
├── frontend/                          # Aplicación React
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js              # Componente de autenticación
│   │   │   ├── Login.css
│   │   │   ├── ListaTareas.js        # Gestor de tareas
│   │   │   ├── ListaTareas.css
│   │   │   ├── Tarea.js              # Componente individual
│   │   │   ├── Tarea.css
│   │   │   ├── GestorTareas.js       # Versión completa alternativa
│   │   │   └── GestorTareas.css
│   │   ├── App.js                     # Componente raíz
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── README.md                      # Documentación del frontend
│
├── myproject/                         # Backend Django
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── home/                              # App Django
│   ├── views.py
│   ├── urls.py
│   ├── models.py
│   └── serializers.py
│
├── manage.py
├── requirements.txt
├── db.sqlite3
├── .gitignore
│
└── Documentación/
    ├── ESTRUCTURA_COMPONENTES.md      # Guía de componentes
    ├── GESTOR_TAREAS_GUIA.md          # Guía completa de la app
    ├── LOCALSTORAGE_IMPLEMENTACION.md # Documentación de persistencia
    ├── LOGIN_CON_NOMBRE_USUARIO.md    # Documentación del login
    ├── COMPONENTE_TAREA_ACTUALIZADO.md
    └── DIAGRAMA_ESTRUCTURA.txt        # Diagrama visual ASCII
```

---

## 🚀 Instalación y Uso

### 📋 Requisitos Previos
- **Node.js** (v14 o superior)
- **Python** (v3.8 o superior)
- **pip** (gestor de paquetes Python)

### 🔧 Instalación

#### 1. Clonar el Repositorio
```bash
git clone https://github.com/Heiner2001/PrimerFrontend.git
cd PrimerFrontend
```

#### 2. Configurar el Backend (Django)

```bash
# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En Windows:
.\venv\Scripts\activate
# En Mac/Linux:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar migraciones
python manage.py migrate

# Crear superusuario (opcional)
python manage.py createsuperuser

# Ejecutar servidor Django
python manage.py runserver
```

El backend estará disponible en: `http://localhost:8000`

#### 3. Configurar el Frontend (React)

```bash
# Navegar a la carpeta frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm start
```

El frontend estará disponible en: `http://localhost:3000`

---

## 🎯 Estructura de Componentes React

```
App.js (Componente Principal)
│
├── Login.js
│   └── Maneja autenticación y nombre de usuario
│
└── ListaTareas.js
    ├── Gestiona el array de tareas
    ├── Funciones: agregar, completar, eliminar
    └── Renderiza múltiples componentes Tarea
        │
        └── Tarea.js
            ├── Props: texto, completada, callbacks
            └── Renderiza tarea individual
```

---

## 📊 Tecnologías Utilizadas

### Frontend
- **React** 18.2.0 - Librería de UI
- **React Hooks** (useState, useEffect)
- **CSS3** - Estilos con gradientes y animaciones
- **localStorage API** - Persistencia de datos

### Backend
- **Django** 5.2.7 - Framework web
- **Django REST Framework** 3.16.1 - API REST
- **Django CORS Headers** 4.9.0 - Manejo de CORS
- **SQLite** - Base de datos

---

## 💡 Funcionalidades Técnicas

### React Hooks Utilizados
- **useState**: Gestión de estado local
- **useEffect**: Side effects y sincronización
- **Lazy Initial State**: Optimización de carga desde localStorage

### Conceptos Implementados
- **Componentes Funcionales**: 100% funcional components
- **Props y Callbacks**: Comunicación entre componentes
- **Renderizado Condicional**: UI dinámica
- **Inmutabilidad**: Manejo correcto del estado
- **Controlled Components**: Inputs controlados por React

### Persistencia
- **localStorage.getItem()**: Recuperar datos
- **localStorage.setItem()**: Guardar datos
- **JSON.stringify/parse**: Serialización de datos

---

## 📝 Endpoints API (Django)

```
GET  /api/items/     - Listar todos los items
POST /api/items/     - Crear nuevo item
GET  /api/items/:id/ - Obtener item específico
PUT  /api/items/:id/ - Actualizar item
DELETE /api/items/:id/ - Eliminar item
```

---

## 🧪 Testing

### Probar el Login
```bash
1. Escribe tu nombre en el campo
2. Presiona Enter o click en "Iniciar sesión"
3. Verifica el mensaje personalizado
4. Recarga la página (F5)
5. Verifica que sigues logueado
```

### Probar las Tareas
```bash
1. Agrega varias tareas
2. Marca algunas como completadas
3. Elimina algunas tareas
4. Recarga la página (F5)
5. Verifica que todas persisten
```

---

## 📚 Documentación Adicional

- **[frontend/README.md](frontend/README.md)** - Documentación del frontend
- **[ESTRUCTURA_COMPONENTES.md](ESTRUCTURA_COMPONENTES.md)** - Guía de componentes
- **[GESTOR_TAREAS_GUIA.md](GESTOR_TAREAS_GUIA.md)** - Guía completa
- **[LOCALSTORAGE_IMPLEMENTACION.md](frontend/LOCALSTORAGE_IMPLEMENTACION.md)** - Persistencia
- **[LOGIN_CON_NOMBRE_USUARIO.md](frontend/LOGIN_CON_NOMBRE_USUARIO.md)** - Sistema de login

---

## 🔮 Mejoras Futuras

- [ ] Autenticación real con JWT
- [ ] Sincronización con backend
- [ ] Editar tareas existentes
- [ ] Filtros (Todas/Completadas/Pendientes)
- [ ] Fechas de vencimiento
- [ ] Categorías de tareas
- [ ] Drag & Drop para reordenar
- [ ] Modo oscuro
- [ ] Tests unitarios
- [ ] Deployment en producción

---

## 👥 Autor

**Heiner2001**
- GitHub: [@Heiner2001](https://github.com/Heiner2001)
- Repositorio: [PrimerFrontend](https://github.com/Heiner2001/PrimerFrontend)

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🙏 Agradecimientos

Proyecto desarrollado como parte del aprendizaje de React y Django para crear aplicaciones web full stack modernas.

---

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias:
1. Abre un **Issue** en GitHub
2. Crea un **Pull Request** con mejoras
3. Contacta al autor

---

## 🎉 ¡Gracias por usar el Gestor de Tareas!

⭐ Si te gusta el proyecto, dale una estrella en GitHub ⭐

---

**Última actualización:** Octubre 2025

