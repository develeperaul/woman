export type CosemticT = {
  id: number;
  name: string;
};

export type ProductT = {
  id: number;
  name: string;
  amount: string;
  price: string;
  images: {
    id: number;
    path: string;
    width: string;
    height: string;
  }[];
};
