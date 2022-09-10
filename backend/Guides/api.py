from django.shortcuts import render
from Guides.models import Guides
from rest_framework import viewsets, permissions


class GuidesViewSet(viewsets.ModelViewSet):
    queryset = Guides.objects.all()
    # will be changed later on
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GuidesSerializers