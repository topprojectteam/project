# Generated by Django 3.0.4 on 2020-04-25 20:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_publishinghouse'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='publishing_house',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='publishing_houses', to='api.PublishingHouse'),
            preserve_default=False,
        ),
    ]
