# Generated by Django 3.0.4 on 2020-04-25 21:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_book_publishing_house'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='publishing_house',
        ),
    ]