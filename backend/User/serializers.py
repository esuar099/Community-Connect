import email
from django.contrib.auth import get_user_model
from rest_framework import serializers
from User import models





class CreateUserSerializer(serializers.ModelSerializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True,
                                     style={'input_type': 'password'})

    CHOICES = (
    ("1"),
    ("2"),
    ("3"),
    ("4"),
    ("5"),
    ("6")
    )

    GENDERS = (
        ('female'),
        ('male'),
        ('non-binary'),
        ('other'),
        )

    topics = serializers.MultipleChoiceField(choices=CHOICES, allow_blank=True)
    gender = serializers.ChoiceField(choices=GENDERS, allow_blank=True)
    class Meta:
        model = get_user_model()
        fields = (
            'email',
            'password', 
            'first_name',
            'last_name',
            'gender', 
            'birthdate',
            "state",
            "city",
            "postal_code",
            "address_1",
            "address_2",
            "topics",
            )
        write_only_fields = ('password')
        read_only_fields = ('is_staff', 'is_superuser', 'is_active',)
        
    def create(self, validated_data):
        user = super(CreateUserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class ViewBasicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            'email',
            'password', 
            'first_name',
            'last_name',
            'gender', 
            'birthdate',
            "state",
            "city",
            "postal_code",
            "address_1",
            "address_2",
            "topics",
            )

        read_only_fields = fields


        
