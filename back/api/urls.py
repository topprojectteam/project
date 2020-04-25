from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns =[
     path('login/', obtain_jwt_token),
     path('books/', views.books_list),
     path('books/<int:book_id>/', views.books_detail),
     path('categories/', views.companies_list),
     path('categories/<int:pk>/', views.company_detail),
     path('categories/<int:pk>/books', views.category_books),
     path('books/lev',views.TolstoyBooksAPIView.as_view())

]