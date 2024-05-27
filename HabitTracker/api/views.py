from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Habit
from .serializers import HabitSerializer

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

class HabitViewSet(viewsets.ModelViewSet):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer