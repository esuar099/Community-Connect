"""
Creating URLs for routing.
"""

from django.urls import path
from news_collection.views import LocalNewsAPIView

app_name = "news_collection"

urlpatterns = [
    path(
        r"collect/",
        LocalNewsAPIView.as_view()
        
    ),
]