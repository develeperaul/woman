import { DataObj } from 'src/models/api';
import { api } from './index';
import {
  AvailableDayT,
  AvailableTimeT,
  CategotyT,
  MasterServiceT,
  MasterT,
  RecordServiceT,
  RecordingT,
} from 'src/models/api/recording';

// Показывает список мастеров с выбранным салоном
export const mastersSalon = (salon_id: number): Promise<DataObj<MasterT[]>> =>
  api
    .mainKy(`recording-services/through-master/personnel?salon_id=${salon_id}`)
    .json();

// Показывает список услуг выбранного мастера
export const mastersService = (salon_id: number): Promise<DataObj<MasterT[]>> =>
  api
    .mainKy(`recording-services/through-master/personnel?salon_id=${salon_id}`)
    .json();

// Показывает категории услуг с выбранным салоном
export const masterServices = (
  personnel_id: number
): Promise<DataObj<MasterServiceT[]>> =>
  api
    .mainKy(`recording-service/through-service/personnel/${personnel_id}`)
    .json();

// Показывает услуги с выбранной категорией
export const categories = (salon_id: number): Promise<DataObj<CategotyT[]>> =>
  api
    .mainKy(
      `recording-services/through-service/service-categories?salon_id=${salon_id}`
    )
    .json();

// Показывает мастеров с выбранной услугой
export const services = (category_id: number) =>
  api
    .mainKy(
      `recording-service/through-service/service/{category_id}?category_id=${category_id}`
    )
    .json();

// Показывает список свободных дней с выбранным мастером
export const availableDays = (obj: {
  personnel_id: number;
  year: string;
  month: string;
}): Promise<DataObj<AvailableDayT>> =>
  api
    .mainKy(
      `recording-service/available-days?personnel_id=${obj.personnel_id}&year=${obj.year}&month=${obj.month}`
    )
    .json();

// Показывает список свободных слотов с выбранным мастером,с выбранной услугой
export const availableTimes = (obj: {
  category_id: number;
  service_id: number;
}): Promise<DataObj<AvailableTimeT>> =>
  api
    .mainKy(
      `recording-service/available-times?category_id=${obj.category_id}&service_id=${obj.service_id}`
    )
    .json();

// Запись на стрижку пользователя
export const recordService = (obj: {
  salon_id: number;
  personnel_id: number;
  work_slot_id: number;
  service_id: number;
}): Promise<DataObj<RecordServiceT>> => {
  const body = new FormData();
  body.append('salon_id', String(obj.salon_id));
  body.append('personnel_id', String(obj.personnel_id));
  body.append('work_slot_id', String(obj.work_slot_id));
  body.append('service_id', String(obj.service_id));

  return api.mainKy.post('recording-service', { body }).json();
};

// Показывает список записей пользователя
export const records = (
  filter: 'upcoming' | 'previous'
): Promise<DataObj<RecordingT[]>> =>
  api.mainKy(`my-service-etries?type=${filter}`).json();

// Отменить запись пользователя

export const recordDelete = (journal_record_id: number) =>
  api.mainKy.delete(`my-service-etries/${journal_record_id}`);
