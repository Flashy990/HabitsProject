from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Habit
from .serializers import HabitSerializer

@api_view(['POST'])
def habit_create(request):
    serializer = HabitSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

# class HabitViewSet(viewsets.ModelViewSet):
#     queryset = Habit.objects.all()
#     serializer_class = HabitSerializer
