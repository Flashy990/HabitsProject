from django.db import models
from django.db import models
from django.contrib.auth.models import User


class Habit(models.Model):
    goal = models.CharField(max_length=200)
    goalDescription = models.TextField()
# class Habit(models.Model):
#     name = models.CharField(max_length=200)
#     description = models.TextField()
#     points = models.IntegerField()
#     # user = models.ForeignKey(User, on_delete=models.CASCADE)

