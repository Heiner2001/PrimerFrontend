from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime

# Create your views here.

def index(request):
    """Vista principal de la página de inicio"""
    context = {
        'titulo': 'Bienvenido a Mi Proyecto Django',
        'mensaje': '¡Tu primera aplicación Django está funcionando correctamente!'
    }
    return render(request, 'home/index.html', context)


@api_view(['GET'])
def api_message(request):
    """API endpoint que devuelve un mensaje de bienvenida"""
    data = {
        'titulo': 'API Django + React',
        'mensaje': '¡La conexión entre Django y React funciona correctamente!',
        'timestamp': datetime.now(),
        'status': 'success'
    }
    return Response(data)


@api_view(['GET', 'POST'])
def api_test(request):
    """API endpoint de prueba"""
    if request.method == 'GET':
        return Response({
            'message': 'GET request recibido correctamente',
            'data': {'ejemplo': 'valor de ejemplo'}
        })
    elif request.method == 'POST':
        return Response({
            'message': 'POST request recibido correctamente',
            'received_data': request.data
        })