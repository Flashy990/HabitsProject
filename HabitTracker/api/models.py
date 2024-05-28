from django.db import models
from django.db import models
from django.contrib.auth.models import User


class Habit(models.Model):
    goal = models.CharField(max_length=200)
    goalDescription = models.TextField()

