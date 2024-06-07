export type SalonT = {
  id: number;
  city: string;
  street: string;
  number_house: string;
  description: string;
  phone: string;
  work_from: string;
  work_to: string;
  social_networks: {
    type: 'telegram' | 'whatsapp' | 'vkontakte';
    url: string;
  }[];
};

export type SalonItemT = {
  id: number;
  city: string;
  street: string;
  number_house: string;
  description: string;
  phone: string;
  work_from: string;
  work_to: string;
  social_networks: {
    type: 'telegram' | 'whatsapp' | 'vkontakte';
    url: string;
  }[];
  salon_coordinate: {
    latitude: string;
    longitude: string;
  };
  images: {
    id: number;
    path: string;
    width: string;
    height: string;
    url: string;
  }[];
};

export type StoriesT = {
  id: number;
  title: string;
  published_at: string;
  unpublished_at: string;
  image: {
    id: number;
    path: string;
    width: string;
    height: string;
    url: string;
  };
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

export type StoryGroupT = {
  [key: string]: StoryT[];
};
export type ServiseCategoriesT = {
  id: number;
  name: string;
  image: {
    id: number;
    path: string;
    width: string;
    height: string;
    url: string;
  };
};

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
};

export type MasterForServiceT = {
  id: number;
  name: string;
  description: string | null;
  profession: string;
  price: string;
  time: string;
  profile_image: {
    id: number;
    path: string;
    width: string;
    height: string;
    url: string;
  } | null;
};

export type MasterCardT = {
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
    url: string;
  }[];

  categories: {
    id: number;
    name: string;
    services: {
      id: number;
      name: string;
    }[];
  }[];
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
      url: string;
    };
  };
  dates: string[];
};

export type UpcomingEntryT = {
  id: number;
  service: string;
  date: string;
  personnel: string;
  salon: string;
};
