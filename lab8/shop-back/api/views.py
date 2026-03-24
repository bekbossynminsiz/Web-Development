from django.http import JsonResponse
from .models import Product, Category

def product_to_dict(p):
    return {
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category_id": p.category.id
    }

def category_to_dict(c):
    return {
        "id": c.id,
        "name": c.name
    }

def products_list(request):
    products = Product.objects.all()
    return JsonResponse([product_to_dict(p) for p in products], safe=False)

def product_detail(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product_to_dict(product))

def categories_list(request):
    categories = Category.objects.all()
    return JsonResponse([category_to_dict(c) for c in categories], safe=False)

def category_detail(request, id):
    category = Category.objects.get(id=id)
    return JsonResponse(category_to_dict(category))

def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    return JsonResponse([product_to_dict(p) for p in products], safe=False)