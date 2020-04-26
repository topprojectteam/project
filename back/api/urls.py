from django.urls import path
from api import views,views_cbv
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns =[
     path('login/', obtain_jwt_token),
     path('books/', views.books_list),
     path('books/<int:book_id>/', views.book_detail),
     path('categories/', views.categories_list),
     path('categories/<int:pk>/', views.category_detail),
     path('categories/<int:pk>/books/', views.category_books),
     path('books/lev/',views_cbv.TolstoyBooksAPIView.as_view()),
     path('pub/',views_cbv.PublishingHouseListAPIView.as_view()),
     path('pub/<int:id>/', views_cbv.PublishingHouseBooksAPIView.as_view()),

]