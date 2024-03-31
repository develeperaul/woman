export type CosemticCategoryT = {
  id: number;
  name: string;
};

export type ProductT = {
  id: number;
  name: string;
  amount: string;
  price: string;
  image: {
    id: number;
    path: string;
    width: string;
    height: string;
    url: string;
  }[];
};
