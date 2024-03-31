export type DataVal<T> = {
  loading: boolean;
  data: T;
  err?: string;
};

export type Record = {
  service: {
    name: string;
    duration: string;
    price: string;
  };
  master: {
    name: string;
    position: string;
    url: string;
  };
  date: {
    day: string;
    time: string;
  };
};
export type Servise = {
  id: number;
  name: string;
  url: string;
  sub_services: {
    id: number;
    name: string;
    text: string;
    price: string;
    time: string;
  }[];
};
export type Master = {
  id: number;
  name: string;
  position: string;
  url: string;
  dates: {
    day: string;
    times: string[];
  }[];
  price: string;
  time: string;
  servicesList: {
    id: number;
    price: string;
    time: string;
    name: string;
    sub_services: {
      id: number;
      name: string;
      price: string;
      time: string;
    }[];
  }[];
  text: string;
  works: string[];
};
