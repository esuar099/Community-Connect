from rest_framework import routers
from django.urls import path
from .views import ThreadAPIView, ReplyAPIView, ThreadDetailAPIView

# urlpatterns = [
#     path('api/thread/', ThreadAPIView.as_view()),
#     path('api/thread/<int:id>/', ThreadDetailAPIView.as_view()),
# ]

router = routers.DefaultRouter()
router.register('/thread', ThreadAPIView, 'Threads')
#router.register('forum/thread/<int:id>/', ThreadDetailAPIView, 'Threads')
router.register('/reply', ReplyAPIView, 'Threads')

urlpatterns = router.urls
