# Generated by Django 3.2.4 on 2022-05-22 03:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Guides', '0004_auto_20220521_2315'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reply',
            name='text',
            field=models.TextField(default=''),
        ),
    ]