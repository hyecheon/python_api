# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-12-23 04:01
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0005_auto_20171219_0136'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='creator',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='images', to=settings.AUTH_USER_MODEL),
        ),
    ]
