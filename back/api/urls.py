from django.urls import path
from api import views
# from rest_framework_jwt.views import obtain_jwt_token

urlpatterns =[
     # path('login/', obtain_jwt_token),
     path('vacancies/', views.books_list),
     path('vacancies/<int:vacancy_id>/', views.books_detail),
     path('companies/', views.companies_list),
     path('companies/<int:pk>/', views.category_detail),

]