from rest_framework.views import APIView
from rest_framework.response import Response

from python_api.images import serializers


class Feed(APIView):
    def get(self, request, format=True):
        user = request.user

        following_users = user.following.all()
        image_list = []
        for following_user in following_users:
            user_images = following_user.images.all()[:2]

            for image in user_images:
                image_list.append(image)

        sorted_list = sorted(image_list, key=get_key, reverse=True)

        print(sorted_list)

        serializer = serializers.ImageSerializer(sorted_list, many=True)

        return Response(serializer.data)


def get_key(image):
    return image.created_at


class LikeImage(APIView):
    def get(self, request, image_id, format=True):
        print(image_id)
        return Response(status=200)
