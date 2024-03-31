import { DataObj } from 'src/models/api';
import {
  LastJournalRecordT,
  MasterT,
  SalonT,
  SalonItemT,
  ServiseCategoriesT,
  StoriesT,
  StoryT,
  UpcomingEntryT,
} from 'src/models/api/main';
import { api } from './index';

// Показывает список салонов
export const salons = (): Promise<DataObj<SalonT[]>> =>
  api.mainKy('salons').json();

export const salonItem = (id: number): Promise<DataObj<SalonItemT>> =>
  api.mainKy(`salons/${id}`).json();

// Показывает список сторисов
export const stories = (): Promise<DataObj<StoriesT[]>> =>
  api.mainKy('stories').json();

// Карточка сториса
export const story = (previev_story_id: number): Promise<DataObj<StoryT[]>> =>
  api.mainKy(`stories/${previev_story_id}`).json();

// Список категорий услуг
export const serviceCategories = (): Promise<DataObj<ServiseCategoriesT[]>> => {
  return api.mainKy('service-categories').json();
};

// Показывает список пользователей с выбранной категорией,и салоном
export const personnelCategory = (obj: {
  category_id: number;
  salon_id: number;
}): Promise<DataObj<MasterT[]>> =>
  api
    .mainKy(
      `personnel-category?salon_id=${obj.salon_id}&category_id=${obj.category_id}`
    )
    .json();

//Показывает карточку мастера
export const masterCard = (
  personnel_id: number
): Promise<DataObj<MasterT | null>> =>
  api.mainKy(`personnel/${personnel_id}`).json();

// Запись на стрижку пользователя (Быстрая запись), если отсутствует последняя запись у пользователя, выведет пустой массив
export const lastJournalRecord = (): Promise<
  DataObj<LastJournalRecordT | null>
> => api.mainKy('recording-services/last-journal-record').json();

// Ближайшая предстоящая запись пользователя
export const upcomingEntry = (): Promise<DataObj<UpcomingEntryT | null>> =>
  api.mainKy('my-service-entries/upcoming-entry').json();

// Создание рейтинга от пользователя
export const rating = (salon_id: number, rating: number) => {
  const body = new FormData();
  body.append('salon_id', String(salon_id));
  body.append('rating', String(rating));
  return api.mainKy.post('rating', { body }).json();
};
