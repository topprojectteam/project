from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Book,PublishingHouse
from api.serializers import BookSerializer,PublishingHouseSerializer

class PublishingHouseListAPIView(APIView):
    def get(self, request):
        publishing_house = PublishingHouse.objects.all()
        serializer = PublishingHouseSerializer(publishing_house, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = PublishingHouseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PublishingHouseBooksAPIView(APIView):
    def get_object(self, id):
        try:
            return PublishingHouse.objects.get(id=id)
        except PublishingHouse.DoesNotExist as e:
            return Response({'error': str(e)})

    def post(self, request, id):

        book = Book(publishing_house=self.get_object(id))
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def get(self, request, id):
        books = Book.objects.filter(publishing_house=self.get_object(id))
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)


class TolstoyBooksAPIView(APIView):
    def get(self, request):
        vacancies = Book.l_objects.all()
        serializer = BookSerializer(vacancies, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

