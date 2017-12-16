from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        regex=r'^all/$',
        view=views.ListAllImages.as_view(),
        name='all_images'
    ), url(
        regex=r'^comments/$',
        view=views.ListAllImages.as_view(),
        name='all_comments'
    ), url(
        regex=r'^likes/$',
        view=views.ListAllImages.as_view(),
        name='all_likes'
    ),
]
