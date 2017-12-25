from rest_framework import serializers
from . import models
from python_api.users import serializers as user_serializers
from python_api.images import serializers as image_serializers


class NotificationSerializer(serializers.ModelSerializer):
    creator = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImagesSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'
