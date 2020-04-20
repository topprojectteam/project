from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='')

    def to_json(self):
        return {
            'id':self.id,
            'name': self.name,
            'description': self.description,
        }


class Book(models.Model):
    title = models.CharField(max_length=450)
    description = models.TextField(default='')
    author = models.CharField(max_length=450)
    cost = models.FloatField()
    img_url = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='books')


    def to_json(self):
        return {
            'id': self.id,
            'title':self.title,
            'description': self.description,
            'author': self.author,
            'cost': self.cost,

        }
