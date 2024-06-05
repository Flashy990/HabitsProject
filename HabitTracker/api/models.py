from django.db import models

class Habit(models.Model):
    goal = models.CharField(max_length=200)
    goalDescription = models.TextField()