# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-12-10 09:15
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0002_auto_20171208_2144'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='updated_ad',
            new_name='updated_at',
        ),
        migrations.RenameField(
            model_name='image',
            old_name='updated_ad',
            new_name='updated_at',
        ),
        migrations.RenameField(
            model_name='like',
            old_name='updated_ad',
            new_name='updated_at',
        ),
    ]
