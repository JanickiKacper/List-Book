from django.db import models
from django.conf import settings


class TODO(models.Model):

    firstName = models.CharField(max_length=64, unique=False, null=False)
    secondName = models.CharField(max_length=64, unique=False, null=False)
    title = models.CharField(max_length=64, unique=True, null=False)
    description = models.TextField()
    emailAddress = models.CharField(max_length=64, unique=False)
    phoneNumberOne = models.CharField(max_length=64, unique=False)
    phoneNumberTwo = models.CharField(max_length=64, unique=False)
    contactTypeOne = models.CharField(max_length=64, unique=False)
    contactTypeTwo = models.CharField(max_length=64, unique=False)
    contactTypeThree = models.CharField(max_length=64, unique=False)
    is_complete = models.BooleanField(default=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="todo",
        null=True,
        blank=True,
    )

    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.user.first_name} - {self.title}' 
        