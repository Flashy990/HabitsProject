from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Habit
from .serializers import HabitSerializer


@api_view(['POST', 'GET'])
def habit_create(request):
    if request.method == 'POST':
        serializer = HabitSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)
    elif request.method == 'GET':
        habits = Habit.objects.all()
        serializer = HabitSerializer(habits, many=True)
        return Response(serializer.data)

@api_view(['DELETE'])
def habit_delete(request, pk):
    habit = Habit.objects.get(id=pk)
    habit.delete()

    return Response('Habit was deleted successfully!')

