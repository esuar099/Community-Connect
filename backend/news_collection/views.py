#from django.shortcuts import render

from traceback import print_tb
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from news_collection.LocalNews import LocalNews
class LocalNewsAPIView(APIView):
    '''
    {"scrape_local":"True", "location":"750 NW 43rd Ave Miami, FL 33126", "search_term":"covid"} 
       '''
    def post(self, request):
        
        if request.data != None:

            data_collector = LocalNews(
            address=request.data["location"], keywords=request.data["search_term"]
            )
            headlines=data_collector.news_search()
        return Response({"headlines": headlines})

        #return Response(status.HTTP_201_CREATED)


