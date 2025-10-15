# Script para iniciar el servidor Django en Windows

Write-Host "=================================" -ForegroundColor Cyan
Write-Host "  Iniciando Servidor Django" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Activar entorno virtual
Write-Host "Activando entorno virtual..." -ForegroundColor Yellow
& .\venv\Scripts\Activate.ps1

# Iniciar servidor
Write-Host "Iniciando servidor de desarrollo..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Servidor disponible en:" -ForegroundColor Green
Write-Host "  -> http://127.0.0.1:8000/" -ForegroundColor Cyan
Write-Host "  -> http://127.0.0.1:8000/admin/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

python manage.py runserver

