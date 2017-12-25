# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-12-24 07:46
from __future__ import unicode_literals

from django.db import migrations
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0002_auto_20150616_2121'),
        ('images', '0006_auto_20171223_1301'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]
