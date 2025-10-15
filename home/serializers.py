from rest_framework import serializers


class MessageSerializer(serializers.Serializer):
    """Serializer para mensajes simples"""
    titulo = serializers.CharField(max_length=200)
    mensaje = serializers.CharField()
    timestamp = serializers.DateTimeField(read_only=True)

