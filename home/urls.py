from django.urls import path
from . import views

app_name = 'home'

urlpatterns = [
    # Vista HTML tradicional
    path('', views.index, name='index'),
    
    # API endpoints
    path('api/message/', views.api_message, name='api_message'),
    path('api/test/', views.api_test, name='api_test'),
]

