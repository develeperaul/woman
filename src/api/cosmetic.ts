import { DataObj } from 'src/models/api';
import { api } from './index';
import { CosemticCategoryT, ProductT } from 'src/models/api/cosmetic';

// Список категорий товаров
export const cosmeticsCategories = (): Promise<DataObj<CosemticCategoryT[]>> =>
  api.mainKy('cosmetics/categories').json();

// Список товаров
export const products = (category_id: number): Promise<DataObj<ProductT[]>> =>
  api.mainKy(`cosmetics/products?category_id=${category_id}`).json();

// Карточка продукта
export const product = (product_id: number): Promise<DataObj<ProductT>> =>
  api.mainKy(`cosmetics/products/${product_id}`).json();

// Создание заказа
export const cosmeticOrder = (obj: {
  name: string;
  phone: string;
  product_id: number;
}) => {
  const body = new FormData();
  body.append('name', obj.name);
  body.append('phone', obj.phone);
  body.append('product_id', String(obj.product_id));
  return api.mainKy.post(`cosmetics/order`, { body });
};
