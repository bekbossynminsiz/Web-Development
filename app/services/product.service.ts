import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories = signal<Category[]>([
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ]);

  products = signal<Product[]>([

    // SMARTPHONES
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 128GB',
      description: '6.1″ OLED, A17 Pro chip',
      price: 569990,
      rating: 4.9,
      likes: 0,
      categoryId: 1,
      url: 'https://l.kaspi.kz/shop/Epf8rCX2ACfRXYm'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 256GB',
      description: 'Dynamic AMOLED 2X',
      price: 489990,
      rating: 4.8,
      likes: 0,
      categoryId: 1,
      url: 'https://l.kaspi.kz/shop/3i7gMF6J6EDrfYD'
    },
    {
      id: 3,
      name: 'Xiaomi 13T Pro 512GB',
      description: 'Leica camera system',
      price: 329990,
      rating: 4.7,
      likes: 0,
      categoryId: 1,
      url: 'https://l.kaspi.kz/shop/3sUN74Y8iVroNom'
    },
    {
      id: 4,
      name: 'Huawei P60 Pro',
      description: 'Ultra lighting camera',
      price: 379990,
      rating: 4.6,
      likes: 0,
      categoryId: 1,
      url: 'https://kaspi.kz/shop/p/huawei-pura-80-pro-12-gb-512-gb-chernyi-145175758/?c=750000000'
    },
    {
      id: 5,
      name: 'iPhone 14 128GB',
      description: 'Super Retina XDR',
      price: 369990,
      rating: 4.8,
      likes: 0,
      categoryId: 1,
      url: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
    },

    // LAPTOPS
    {
      id: 6,
      name: 'MacBook Air M2',
      description: 'Apple M2 chip',
      price: 549990,
      rating: 4.9,
      likes: 0,
      categoryId: 2,
      url: 'https://l.kaspi.kz/shop/HT9YcsEihTorH4X'
    },
    {
      id: 7,
      name: 'ASUS TUF Gaming A15',
      description: 'Ryzen 7, RTX graphics',
      price: 689990,
      rating: 4.7,
      likes: 0,
      categoryId: 2,
      url: 'https://l.kaspi.kz/shop/5ZeqbEhFe7LxBJE'
    },
    {
      id: 8,
      name: 'HP Pavilion 15',
      description: 'Intel Core i5',
      price: 359990,
      rating: 4.5,
      likes: 0,
      categoryId: 2,
      url: 'https://kaspi.kz/shop/p/hp-pavilion-15-113240991/'
    },
    {
      id: 9,
      name: 'Lenovo IdeaPad 3',
      description: 'Affordable laptop',
      price: 279990,
      rating: 4.4,
      likes: 0,
      categoryId: 2,
      url: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15amn8-15-6-8-gb-ssd-512-gb-win-11-82xq00lrrk-130761798/?c=750000000'
    },
    {
      id: 10,
      name: 'Dell XPS 13',
      description: 'Premium ultrabook',
      price: 831990,
      rating: 4.8,
      likes: 0,
      categoryId: 2,
      url: 'https://kaspi.kz/shop/p/dell-latitude-7330-13-3-8-gb-ssd-512-gb-linux-210-bdru-3-107542969/?c=750000000'
    },

    // HEADPHONES
    {
      id: 11,
      name: 'AirPods Pro 2',
      description: 'Active Noise Cancellation',
      price: 124990,
      rating: 4.9,
      likes: 0,
      categoryId: 3,
      url: 'https://l.kaspi.kz/shop/Gd7tnSmRGJGUXL2'
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Best ANC headphones',
      price: 189990,
      rating: 4.8,
      likes: 0,
      categoryId: 3,
      url: 'https://l.kaspi.kz/shop/BwvwnCuPTxLn87U'
    },
    {
      id: 13,
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Hi-Fi wireless earbuds',
      price: 89990,
      rating: 4.6,
      likes: 0,
      categoryId: 3,
      url: 'https://l.kaspi.kz/shop/ACzoVTv6SspvM8F'
    },
    {
      id: 14,
      name: 'JBL Tune 760NC',
      description: 'Wireless over-ear',
      price: 49990,
      rating: 4.5,
      likes: 0,
      categoryId: 3,
      url: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-760nc-rozovyi-112634686/?c=750000000'
    },
    {
      id: 15,
      name: 'Xiaomi Redmi Buds 4',
      description: 'Budget ANC earbuds',
      price: 29990,
      rating: 4.4,
      likes: 0,
      categoryId: 3,
      url: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-4-active-chernyi-111491755/?c=750000000'
    },

    // TABLETS
    {
      id: 16,
      name: 'iPad Air 11″ 128GB',
      description: 'Liquid Retina display',
      price: 319990,
      rating: 4.8,
      likes: 0,
      categoryId: 4,
      url: 'https://l.kaspi.kz/shop/4Seu1kJbKiYyYV4'
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9',
      description: 'AMOLED display',
      price: 389990,
      rating: 4.7,
      likes: 0,
      categoryId: 4,
      url: 'https://l.kaspi.kz/shop/6jBgVuiYYiHa3Hh'
    },
    {
      id: 18,
      name: 'Xiaomi Pad 6',
      description: 'Snapdragon 870',
      price: 249990,
      rating: 4.6,
      likes: 0,
      categoryId: 4,
      url: 'https://l.kaspi.kz/shop/7ESu88yGtZsfVNm'
    },
    {
      id: 19,
      name: 'Huawei MatePad 11',
      description: '120Hz display',
      price: 269990,
      rating: 4.5,
      likes: 0,
      categoryId: 4,
      url: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-seryi-podarok-145939457/?c=750000000'
    },
    {
      id: 20,
      name: 'Lenovo Tab P11',
      description: 'Entertainment tablet',
      price: 199990,
      rating: 4.4,
      likes: 0,
      categoryId: 4,
      url: 'https://kaspi.kz/shop/p/lenovo-tab-p11-plus-tb-j616f-za940326ru-11-djuim-4-gb-128-gb-seryi-109848413/?c=750000000'
    }

  ]);

}