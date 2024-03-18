export type SalonsT = {
  id: number;
  city: string;
  street: string;
  number_house: string;
  description: string;
  phone: string;
  work_from: string;
  work_to: string;
  social_networks: {
    type: string;
    url: string;
  }[];
};

export type StoriesT = {
  id: string;
  title: string;
  published_at: string;
  unpublished_at: string;
  image: { id: number; path: string; width: string; height: string };
};

export type StoryT = {
  id: number;
  title: string;
  description: string;
  action: boolean;
  division: boolean;
  image: {
    id: number;
    path: string;
    width: string;
    height: string;
  };
};

export type ServiseCategoriesT = {
  id: number;
  name: string;
  image: {
    id: number;
    path: string;
    width: string;
    height: string;
  };
};

export type PersonnelCategoryT = {
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
};

export type LastJournalRecordT = {
  service: {
    id: number;
    name: string;
    price: string;
    time: string;
    description: string;
  };
  personal: {
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
  };
  dates: [
    {
      date: string;
    }
  ];
};
