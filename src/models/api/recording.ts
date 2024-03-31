export type MasterT = {
  id: number;
  name: string;
  description: string | null;
  profession: string;
  profile_image: {
    id: number;
    path: string;
    width: string;
    height: string;
    url: string;
  } | null;
  work_images: {
    id: number;
    path: string;
    width: string;
    height: string;
  }[];
};

export type MasterServiceT = {
  id: number;
  name: string;
  price: string;
  time: string;
  description: string;
};

export type CategotyT = {
  id: number;
  name: string;
  image: {
    id: number;
    path: string;
    width: string;
    height: string;
  };
};

export type ServiceT = {
  id: number;
  name: string;
  price: string;
  time: string;
  description: string;
};

export type AvailableDayT = {
  date: string;
};

export type AvailableTimeT = {
  id: number;
  date: string;
};

export type RecordServiceT = {
  address: string;
  personnel: string;
  date: string;
  service: string;
};

export type RecordingT = {
  id: number;
  service: string;
  date: string;
  personnel: string;
  salon: string;
};
