# Generated by Django 3.0.4 on 2020-04-25 21:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_remove_book_publishing_house'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='publishing_house',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='publishing_houses', to='api.PublishingHouse'),
            preserve_default=False,
        ),
    ]
