from django.shortcuts import render
from django.http import HttpResponse
from .models import Reply, Thread
from .serializers import ThreadSerializer, ReplySerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets, status, filters
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class ThreadAPIView(viewsets.ModelViewSet):
    """
    For creating a thread of getting all threads.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = ThreadSerializer
    
    def get_queryset(self):
        return Thread.objects.all()

    
    def create(self, request):
        serializer = ThreadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReplyAPIView(viewsets.ModelViewSet):
    """
    Creating or updating a product.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = ReplySerializer
    
    def get_queryset(self):
        queryset = Reply.objects.all()
        thread = self.request.query_params.get('thread')
        if thread is not None:
            queryset = queryset.filter(thread=thread)
        return queryset
    
    def create(self, request):
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ThreadDetailAPIView(viewsets.ModelViewSet):

    permission_classes = [IsAuthenticated]
    serializer_class = ThreadSerializer
    
    def get_queryset(self):
        thread = self.kwargs['username']
        q1=Thread.objects.filter(id=thread)
        q2=Reply.objects.filter(id=thread)
        return {"res":"dssdds"}

# class ThreadDetailAPIView(APIView):

#     def get_object(self, id):
#         try:
#             return Thread.objects.get(id=id)
#         except Thread.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)
    
#     def get(self, request, id):
#         thread = self.get_object(id)
#         if type(thread) == Response:
#             return thread
#         serializer = ThreadSerializer(thread)
#         return Response(serializer.data) 
    
#     def put(self, request, id):
#         thread = self.get_object(id)
#         serializer = ThreadSerializer(thread, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, id):
#         thread = self.get_object(id)
#         thread.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
