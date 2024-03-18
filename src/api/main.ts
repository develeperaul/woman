import { DataObj } from 'src/models/api';
import {
  LastJournalRecordT,
  PersonnelCategoryT,
  SalonsT,
  ServiseCategoriesT,
  StoriesT,
  StoryT,
} from 'src/models/api/main';
import { api } from './index';

// Показывает список салонов
export const salons = (): Promise<DataObj<SalonsT[]>> =>
  api.mainKy('salons').json();

// Показывает список сторисов
export const stories = (): Promise<DataObj<StoriesT[]>> =>
  api.mainKy('stories').json();

// Карточка сториса
export const story = (): Promise<DataObj<StoryT[]>> =>
  api.mainKy('stories/{previev_story_id}').json();

// Список категорий услуг
export const serviceCategories = (): Promise<DataObj<ServiseCategoriesT[]>> => {
  return api.mainKy('service-categories').json();
};

// Показывает список пользователей с выбранной категорией,и салоном
export const personnelCategory = (): Promise<DataObj<PersonnelCategoryT[]>> =>
  api.mainKy('personnel-category').json();

// Запись на стрижку пользователя (Быстрая запись), если отсутствует последняя запись у пользователя, выведет пустой массив
export const lastJournalRecord = (): Promise<DataObj<LastJournalRecordT>> =>
  api.mainKy('last-journal-record').json();
