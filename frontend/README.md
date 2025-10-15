# Frontend React

Esta es la aplicación frontend desarrollada con React que se conecta con el backend de Django.

## 🚀 Características

- **React 18** - Framework de frontend moderno
- **Axios** - Cliente HTTP para comunicación con API
- **Diseño Responsivo** - Se adapta a todos los dispositivos
- **Componentes Reutilizables** - Arquitectura modular

## 📦 Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
npm install
```

## ▶️ Ejecutar el Servidor de Desarrollo

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## 🏗️ Build para Producción

```bash
npm run build
```

Esto creará una versión optimizada en la carpeta `build/`

## 📁 Estructura del Proyecto

```
frontend/
├── public/              # Archivos públicos estáticos
├── src/
│   ├── api/            # Configuración y servicios de API
│   │   ├── config.js   # URL base de la API
│   │   └── apiService.js  # Funciones para consumir la API
│   ├── components/     # Componentes React
│   │   ├── ApiMessage.js
│   │   └── ApiMessage.css
│   ├── App.js          # Componente principal
│   ├── App.css         # Estilos principales
│   └── index.js        # Punto de entrada
├── package.json        # Dependencias y scripts
└── README.md          # Este archivo
```

## 🔌 Conexión con Django

El frontend se comunica con el backend Django a través de:
- **URL Base:** `http://127.0.0.1:8000`
- **Endpoints disponibles:**
  - `GET /api/message/` - Obtener mensaje de bienvenida
  - `GET /api/test/` - Endpoint de prueba GET
  - `POST /api/test/` - Endpoint de prueba POST

## 🛠️ Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm test` - Ejecuta tests
- `npm run eject` - Expone configuración de webpack (⚠️ irreversible)

## 📝 Notas

- Asegúrate de que el servidor Django esté corriendo en `http://127.0.0.1:8000`
- CORS está configurado para permitir solicitudes desde `http://localhost:3000`
- El hot-reload está activado: los cambios se reflejan automáticamente

## 🎨 Personalización

Para cambiar la URL del backend, edita `src/api/config.js`:

```javascript
const API_BASE_URL = 'http://tu-servidor:puerto';
```
