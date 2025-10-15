# Script para crear un superusuario en Django

Write-Host "=================================" -ForegroundColor Cyan
Write-Host "  Crear Superusuario Django" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Activar entorno virtual
Write-Host "Activando entorno virtual..." -ForegroundColor Yellow
& .\venv\Scripts\Activate.ps1

Write-Host ""
Write-Host "Por favor, ingresa los datos del superusuario:" -ForegroundColor Yellow
Write-Host ""

# Crear superusuario
python manage.py createsuperuser

Write-Host ""
Write-Host "¡Superusuario creado exitosamente!" -ForegroundColor Green
Write-Host "Puedes acceder al panel de administración en: http://127.0.0.1:8000/admin/" -ForegroundColor Cyan

