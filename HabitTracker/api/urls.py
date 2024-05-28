from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
# from .views import HabitViewSet

urlpatterns = [
    path('habits/', views.habit_create, name='habit_create'),
]
# urlpatterns = [
#     path('hello-world/', views.hello_world, name='hello_world_sigma'),
# ]

# router = DefaultRouter()
# router.register(r'habits', HabitViewSet, basename='habit')
# urlpatterns = router.urls
