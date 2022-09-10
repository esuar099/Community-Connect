from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import BasicUserCreationForm, BasicUserChangeForm
from .models import BasicUser

class BasicUserAdmin(UserAdmin):
    add_form = BasicUserCreationForm
    form = BasicUserChangeForm

    model = BasicUser

    list_display = ('username', 'email',
                     'is_superuser', 'last_login',)
    list_filter = ('is_superuser',)
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Permissions', {'fields': ( 
         'is_superuser', 'groups', 'user_permissions')}),
        ('Dates', {'fields': ('last_login', 'date_joined')})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password')}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(BasicUser, BasicUserAdmin)