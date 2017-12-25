from rest_framework import serializers
from . import models
from python_api.images import serializers as images_serializers


class UserProfileSerializer(serializers.ModelSerializer):
    images = images_serializers.ImageSerializer(many=True, read_only=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    class Meta:
        model = models.User
        fields = (
            'profile_image',
            'username',
            'name',
            'bio',
            'website',
            'post_count',
            'followers_count',
            'following_count',
            'images'
        )


class UserProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User


class ExploreUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name'
        )


class ListUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name',
        )
