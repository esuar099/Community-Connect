from turtle import title
from django.db import models
from django.conf import settings

class Thread(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=0
    )
    title=models.CharField(max_length=500, blank=False, default="")
    description=models.TextField(blank = True, default="")
    posted_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    # mentions = User
    is_unapproved = models.BooleanField(default=False)
    is_hidden = models.BooleanField(default=False)
    has_reports = models.BooleanField(default=False)
    is_closed = models.BooleanField(default=False)
    likes = models.IntegerField(default=0)
    

class Reply(models.Model):
    thread= models.ForeignKey(Thread, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    posted_on = models.DateTimeField(auto_now_add=True)
    is_unapproved = models.BooleanField(default=False)
    is_hidden = models.BooleanField(default=False)
    has_reports = models.BooleanField(default=False)
    likes = models.IntegerField(default=0)
    text=  models.TextField(blank = False, default="")
def _str_(self):
        return self.title