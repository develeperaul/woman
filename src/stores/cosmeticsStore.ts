import { defineStore } from 'pinia';
import {
  cosmeticsCategories,
  products,
  product,
  cosmeticOrder,
} from 'src/api/cosmetic';
import { DataVal } from 'src/models';
import { CosemticCategoryT, ProductT } from 'src/models/api/cosmetic';

export default defineStore('cosmetics', () => {
  //start Список категорий товаров

  const cosmeticsCategoryList = ref<DataVal<CosemticCategoryT[]>>({
    loading: false,
    data: [],
  });

  const getCosmeticsCategories = async () => {
    try {
      cosmeticsCategoryList.value.loading = true;

      const res = (await cosmeticsCategories()).data;
      cosmeticsCategoryList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      cosmeticsCategoryList.value.loading = false;
    }
  };

  // end Список категорий товаров
  // start Список товаров
  const productList = ref<DataVal<ProductT[]>>({
    loading: false,
    data: [],
  });

  const getProducts = async (category_id: number) => {
    try {
      productList.value.loading = true;

      const res = (await products(category_id)).data;
      productList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      productList.value.loading = false;
    }
  };
  // end Список товаров

  // start Список товаров
  const productItem = ref<DataVal<ProductT | null>>({
    loading: false,
    data: null,
  });

  const getProduct = async (product_id: number) => {
    try {
      productItem.value.loading = true;

      const res = (await product(product_id)).data;
      productItem.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      productItem.value.loading = false;
    }
  };
  // end Список товаров

  const orderProduct = async (product_id: number) => {
    try {
      cosmeticsCategoryList.value.loading = true;

      const res = await cosmeticOrder({
        product_id: product_id,
        name: 'test',
        phone: '8989898989',
      });

      return res;
    } catch (e) {
      throw e;
    } finally {
      cosmeticsCategoryList.value.loading = false;
    }
  };
  return {
    cosmeticsCategoryList,
    getCosmeticsCategories,

    productList,
    getProducts,

    productItem,
    getProduct,

    orderProduct,
  };
});
