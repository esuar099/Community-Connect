from rest_framework import serializers
from Guides.models import Thread, Reply
# Shorthand for the long class below

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = '__all__'
        
class ThreadSerializer(serializers.ModelSerializer):
    replies=ReplySerializer(many=True,read_only=True, source='reply_set')
    user=serializers.CurrentUserDefault()
    class Meta:
        model = Thread
        fields = ('id',
            'user',
            'title', 
        'description',
        "posted_on",
        'updated_on',
        'is_unapproved',
        'is_hidden',
        'has_reports',
        'is_closed',
        'likes',
        'replies')

        depth=1
        #read_only_fields = ['replies']
    
    # def create(self, validated_data):
    #     replies = validated_data.pop('replies')
    #     thread_instance = Thread.objects.create(**validated_data)
    #     for reply in replies:
    #         reply.objects.create(user=thread_instance,**reply)
    #     return thread_instance

# class ThreadSerializers(serializers.Serializer):
#     poster_name = serializers.CharField(max_length=100)
#     posted_on = serializers.DateTimeField()
#     updated_on = serializers.DateTimeField()
#     # mentions = 
#     last_poster_name = serializers.CharField(max_length=100)
#     replies = serializers.IntegerField()
#     is_unapproved = serializers.BooleanField()
#     is_hidden = serializers.BooleanField()
#     has_reports = serializers.BooleanField()
#     is_closed = serializers.BooleanField()
#     likes = serializers.IntegerField()

#     def create(self, validated_data):
#         return Thread.objects.create(validated_data)

#     def update(self, instance, validated_data):
#         instance.poster_name = validated_data.get('poster_name', instance.poster_name)
#         instance.posted_on = validated_data.get('posted_on', instance.posted_on)
#         instance.updated_on = validated_data.get('updated_on', instance.updated_on)
#         instance.last_poster_name = validated_data.get('last_poster_name', instance.last_poster_name)
#         instance.replies = validated_data.get('replies', instance.replies)
#         instance.is_unapproved = validated_data.get('is_unapproved', instance.is_unapproved)
#         instance.is_hidden = validated_data.get('is_hidden', instance.is_hidden)
#         instance.has_reports = validated_data.get('has_reports', instance.has_reports)
#         instance.is_closed = validated_data.get('is_closed', instance.is_closed)
#         instance.likes = validated_data.get('likes', instance.likes)
#         instance.save()
#         return instance