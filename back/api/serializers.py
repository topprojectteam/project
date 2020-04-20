from rest_framework import serializers
from api.models import Book, Category

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name', 'description')


class BookSerializer(serializers.ModelSerializer):
    # company = CompanySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Book
        fields = ('id', 'title', 'description','author','cost', 'category_id')