
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.conf import settings
from .managers import CustomUserManager
from django.db import models

# Create your models here.
class BasicUser(AbstractBaseUser,PermissionsMixin):
    """
    Model defining a base user in this platform.
    """
    username = None
    email = models.EmailField(("email address"), unique=True)
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = [
        "email"
        "username"
        #"first_name",
        #"last_name",
        # "state",
        # "city",
        # "postal_code",
        # "address_1",
        #"birthdate",
        # "topics"
    ]
    objects = CustomUserManager()

    # profile_image = models.ImageField(default="no_image.jpg")
    first_name = models.CharField(max_length=100, blank=False, default="")
    last_name = models.CharField(max_length=100, blank=False, default="")
    gender=models.CharField(max_length=100, null=True, blank=True)
    birthdate = models.DateField(blank=True, null=True)
    
    state = models.CharField(max_length=2, blank=True, default="")
    city = models.CharField(max_length=100, blank=True, default="")
    postal_code = models.CharField(max_length=15, blank=True, default="")
    address_1 = models.CharField(max_length=200, blank=False, default="")
    address_2 = models.CharField(max_length=200, blank=True, default="")
    topics = models.CharField(max_length=400, null=True, blank=True)

    def __str__(self):
        return self.email