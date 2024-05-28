from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('habits/', views.habit_create, name='habit_create'),
    path('habits/<int:pk>/', views.habit_delete, name='habit_delete'),
]
