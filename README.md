# 🚀 Proyecto Django + React

Este es un proyecto full-stack que integra **Django** (Backend) con **React** (Frontend), demostrando una arquitectura moderna de desarrollo web.

## ✨ Características

### Backend (Django)
- Django 5.2.7
- Django REST Framework para APIs
- Django CORS Headers configurado
- Panel de administración de Django
- API RESTful con endpoints de prueba
- Base de datos SQLite3

### Frontend (React)
- React 18
- Axios para peticiones HTTP
- Componentes reutilizables
- Diseño moderno y responsivo
- Integración completa con API Django

## 📋 Requisitos Previos

- Python 3.x
- Node.js y npm
- pip (gestor de paquetes de Python)

## 🔧 Instalación

### 1. Configurar Backend (Django)

```powershell
# Crear y activar entorno virtual
python -m venv venv
.\venv\Scripts\Activate.ps1  # Windows PowerShell
# venv\Scripts\activate.bat  # Windows CMD
# source venv/bin/activate   # Linux/Mac

# Instalar dependencias
pip install -r requirements.txt

# Realizar migraciones
python manage.py migrate

# (Opcional) Crear superusuario
python manage.py createsuperuser
```

### 2. Configurar Frontend (React)

```bash
cd frontend
npm install
```

## ▶️ Ejecutar el Proyecto

### Opción 1: Ejecutar ambos servidores automáticamente (Recomendado)

```powershell
.\start_both_servers.ps1
```

Este script abrirá dos ventanas de PowerShell:
- Una para Django Backend (puerto 8000)
- Una para React Frontend (puerto 3000)

### Opción 2: Ejecutar manualmente

**Terminal 1 - Django Backend:**
```powershell
.\venv\Scripts\Activate.ps1
python manage.py runserver
```

**Terminal 2 - React Frontend:**
```bash
cd frontend
npm start
```

## 🌐 Acceder a la Aplicación

### Versión Desplegada (GitHub Pages)
- **Frontend en Producción:** https://heiner2001.github.io/PrimerFrontend/

### Desarrollo Local
Una vez iniciados los servidores:

- **Frontend React:** http://localhost:3000
- **Backend Django:** http://127.0.0.1:8000
- **Admin Django:** http://127.0.0.1:8000/admin
- **API Endpoints:**
  - http://127.0.0.1:8000/api/message/
  - http://127.0.0.1:8000/api/test/

## 📁 Estructura del Proyecto

```
PrimerFronted/
│
├── frontend/                    # Aplicación React
│   ├── src/
│   │   ├── api/                # Configuración de API
│   │   │   ├── config.js       # URL base
│   │   │   └── apiService.js   # Servicios HTTP
│   │   ├── components/         # Componentes React
│   │   │   ├── ApiMessage.js
│   │   │   └── ApiMessage.css
│   │   ├── App.js             # Componente principal
│   │   └── App.css            # Estilos principales
│   ├── public/                # Archivos estáticos
│   ├── package.json           # Dependencias React
│   └── README.md             # Documentación React
│
├── myproject/                 # Configuración Django
│   ├── settings.py           # Configuraciones (REST + CORS)
│   ├── urls.py               # URLs principales
│   └── wsgi.py               # WSGI config
│
├── home/                      # App Django
│   ├── templates/            # Templates HTML
│   ├── views.py              # Vistas y API views
│   ├── urls.py               # URLs de la app
│   ├── serializers.py        # Serializers DRF
│   └── models.py             # Modelos
│
├── venv/                      # Entorno virtual Python
├── manage.py                  # Django management
├── requirements.txt           # Dependencias Python
├── .gitignore                # Git ignore
├── start_both_servers.ps1    # Script para iniciar ambos servidores
├── start_server.ps1          # Script solo Django
├── create_superuser.ps1      # Script crear superusuario
└── README.md                 # Este archivo
```

## 🔌 API Endpoints

### GET /api/message/
Devuelve un mensaje de bienvenida con información de la API.

**Respuesta:**
```json
{
  "titulo": "API Django + React",
  "mensaje": "¡La conexión entre Django y React funciona correctamente!",
  "timestamp": "2025-10-15T...",
  "status": "success"
}
```

### GET /api/test/
Endpoint de prueba para peticiones GET.

### POST /api/test/
Endpoint de prueba para peticiones POST.

## 🛠️ Comandos Útiles

### Django

```bash
# Crear nueva app
python manage.py startapp nombre_app

# Migraciones
python manage.py makemigrations
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Recopilar archivos estáticos
python manage.py collectstatic

# Tests
python manage.py test
```

### React

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor desarrollo
npm start

# Build para producción
npm run build

# Tests
npm test
```

## 🔒 Configuración de CORS

El proyecto está configurado para permitir peticiones entre:
- Frontend: `http://localhost:3000`
- Backend: `http://127.0.0.1:8000`

Edita `myproject/settings.py` para modificar estas configuraciones.

## 📝 Notas Importantes

- **Idioma:** Configurado en español (es-es)
- **Zona horaria:** America/Tegucigalpa
- **DEBUG:** Activado (cambiar a False en producción)
- **Base de datos:** SQLite3 (considera PostgreSQL para producción)
- **CORS:** Configurado para desarrollo local
- **SECRET_KEY:** Cambia en producción

## 🚀 Despliegue en GitHub Pages

El frontend de este proyecto está desplegado en GitHub Pages. Para actualizar el despliegue:

```bash
cd frontend
npm run deploy
```

Este comando automáticamente:
1. Crea un build optimizado de producción (`npm run build`)
2. Despliega el contenido a la rama `gh-pages`
3. Actualiza el sitio en: https://heiner2001.github.io/PrimerFrontend/

### Configuración de GitHub Pages
- **Repositorio:** https://github.com/Heiner2001/PrimerFrontend
- **Rama de despliegue:** gh-pages
- **URL del sitio:** https://heiner2001.github.io/PrimerFrontend/

## 🚨 Antes de Producción (Backend)

1. Cambiar `DEBUG = False` en `settings.py`
2. Generar nueva `SECRET_KEY`
3. Configurar `ALLOWED_HOSTS`
4. Usar base de datos robusta (PostgreSQL, MySQL)
5. Configurar archivos estáticos con whitenoise o servidor web
6. Configurar HTTPS
7. Revisar configuración de CORS para producción

## 🐛 Solución de Problemas

### Error de CORS
- Verifica que Django esté corriendo en puerto 8000
- Verifica que React esté corriendo en puerto 3000
- Revisa configuración CORS en `settings.py`

### Error "Module not found"
```bash
# Backend
pip install -r requirements.txt

# Frontend
cd frontend
npm install
```

### Puerto en uso
```bash
# Cambiar puerto Django
python manage.py runserver 8001

# Cambiar puerto React - edita package.json
"start": "PORT=3001 react-scripts start"
```

## 🤝 Contribuir

Siéntete libre de hacer fork del proyecto y enviar pull requests.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

Desarrollado con ❤️ usando Django + React
