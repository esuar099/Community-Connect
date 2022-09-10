from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import BasicUser

class BasicUserCreationForm(UserCreationForm):

    class Meta:
        model = BasicUser
        fields = ('email',)

class BasicUserChangeForm(UserChangeForm):

    class Meta:
        model = BasicUser
        fields = ('email',)