export type MasterT = {
  id: number;
  name: string;
  description: string;
  profession: string;
  profile_image: {
    id: number;
    path: string;
    width: string;
    height: string;
  };
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

export type AvailableDayT = {
  date: string;
};

export type AvailableTimeT = {
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
