from rest_framework import serializers
from api.models import Book, Category, Review, PublishingHouse

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()


    def create(self, validated_data):
        publishing_house = PublishingHouse.objects.create(name=validated_data.get(['name']),
                                                          description=validated_data.get(['description']),)
        return publishing_house

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.save()
        return instance

class BookSerializer(serializers.ModelSerializer):
    # company = CompanySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    publishing_house_id = serializers.IntegerField(write_only=True)


    class Meta:
        model = Book
        fields = ('id', 'title', 'description','author','cost', 'category_id', 'publishing_house_id',)


class PublishingHouseSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()


    def create(self, validated_data):
        publishing_house = PublishingHouse.objects.create(name=validated_data.get(['name']))
        return publishing_house

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance

class ReviewSerializer(serializers.ModelSerializer):
    book_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Review
        fields = ('id', 'comment','book_id')