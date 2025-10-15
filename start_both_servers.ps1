# Script para iniciar Django y React simultáneamente

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Iniciando Django + React" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Iniciar servidor Django en una nueva ventana
Write-Host "Iniciando servidor Django..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; .\venv\Scripts\Activate.ps1; python manage.py runserver"

# Esperar un momento antes de iniciar React
Start-Sleep -Seconds 2

# Iniciar servidor React en una nueva ventana
Write-Host "Iniciando servidor React..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\frontend'; npm start"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Servidores iniciados:" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Django Backend: http://127.0.0.1:8000" -ForegroundColor Cyan
Write-Host "React Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Se han abierto dos ventanas de PowerShell." -ForegroundColor Yellow
Write-Host "Cierra las ventanas para detener los servidores." -ForegroundColor Yellow
Write-Host ""

