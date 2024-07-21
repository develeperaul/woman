import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { Record } from 'src/models';

import {
  categories,
  servicesCategory,
  mastersService,
  availableDays,
  availableTimes,
  mastersSalon,
  servicesMater,
  recordService,
  recordsUser,
  recordDelete,
} from 'src/api/recording';
import {
  CategotyT,
  ServiceT,
  MasterT,
  AvailableDayT,
  AvailableTimeT,
  RecordingT,
} from 'src/models/api/recording';
import { DataVal } from 'src/models';
export default defineStore('records', () => {
  const { salonLocal } = storeToRefs(mainStore());

  const dataRecord = ref<{
    category: CategotyT | null;
    service: ServiceT | null;
    master: MasterT | null;
    day: string | null;
    time: number | null;
    currentSalon: number | null;
  }>({
    category: null,
    service: null,
    master: null,
    day: null,
    time: null,
    currentSalon: null,
  });
  const records = ref<Record[]>([]);

  const addRecords = (obj: Record) => {
    records.value = [...records.value, obj];
  };
  // start через услуги
  const categoryList = ref<DataVal<CategotyT[]>>({ loading: false, data: [] });
  const getCategories = async () => {
    const salonId = dataRecord.value.currentSalon
      ? dataRecord.value.currentSalon
      : salonLocal.value.id;
    try {
      categoryList.value.loading = true;

      const res = (await categories(salonId)).data;
      categoryList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      categoryList.value.loading = false;
    }
  };

  const serviceList = ref<DataVal<ServiceT[]>>({ loading: false, data: [] });
  const getService = async (category_id: number) => {
    const salonId = dataRecord.value.currentSalon
      ? dataRecord.value.currentSalon
      : salonLocal.value.id;
    try {
      serviceList.value.loading = true;

      const res = (await servicesCategory(salonId, category_id)).data;
      serviceList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      serviceList.value.loading = false;
    }
  };

  const masterList = ref<DataVal<MasterForServiceT[]>>({
    loading: false,
    data: [],
  });
  const getMastersService = async (service_id: number) => {
    try {
      masterList.value.loading = true;

      const res = (await mastersService(service_id)).data;
      masterList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      masterList.value.loading = false;
    }
  };

  // end через услуги

  const getMasters = async () => {
    const salonId = dataRecord.value.currentSalon
      ? dataRecord.value.currentSalon
      : salonLocal.value.id;
    try {
      masterList.value.loading = true;

      const res = (await mastersSalon(salonId)).data;
      masterList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      masterList.value.loading = false;
    }
  };

  const getServicesMaster = async (personnel_id: number) => {
    try {
      serviceList.value.loading = true;
      const res = (await servicesMater(personnel_id)).data;

      serviceList.value.data = res;
    } catch (e) {
      throw e;
    } finally {
      serviceList.value.loading = false;
    }
  };

  // start через мастера

  // end через мастера
  const availableDayList = ref<DataVal<AvailableDayT | null>>({
    loading: false,
    data: null,
  });
  const getAvailableDays = async (obj: {
    personnel_id: number;
    year: string;
    month: string;
  }) => {
    try {
      availableDayList.value.loading = true;
      const res = (await availableDays(obj)).data;
      availableDayList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      availableDayList.value.loading = false;
    }
  };

  const availableTimeList = ref<DataVal<AvailableTimeT | null>>({
    loading: false,
    data: null,
  });
  const getAvailableTimes = async (obj: {
    service_id: number;
    personnel_id: number;
    date: string;
  }) => {
    try {
      availableTimeList.value.loading = true;
      const res = (await availableTimes(obj)).data;
      availableTimeList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      availableTimeList.value.loading = false;
    }
  };

  const record = async (obj: {
    personnel_id: number;
    work_slot_id: number;
    service_id: number;
  }) => {
    const salonId = dataRecord.value.currentSalon
      ? dataRecord.value.currentSalon
      : salonLocal.value.id;
    try {
      return (
        await recordService({
          salon_id: salonId,
          ...obj,
        })
      ).data;
    } catch (e) {
      throw e;
    }
  };

  const rezetDataStore = () => {
    dataRecord.value = {
      category: null,
      service: null,
      master: null,
      day: null,
      time: null,
      currentSalon: null,
    };
  };

  const recordList = ref<DataVal<RecordingT[]>>({
    loading: false,
    data: [],
  });

  const recordListPrev = ref<DataVal<RecordingT[]>>({
    loading: false,
    data: [],
  });

  const getRecords = async (filter: 'upcoming' | 'previous') => {
    if (filter === 'upcoming') {
      try {
        recordList.value.loading = true;
        const res = (await recordsUser(filter)).data;
        recordList.value.data = res;

        return res;
      } catch (e) {
        throw e;
      } finally {
        recordList.value.loading = false;
      }
    }

    if (filter === 'previous') {
      try {
        recordListPrev.value.loading = true;
        const res = (await recordsUser(filter)).data;
        recordListPrev.value.data = res;

        return res;
      } catch (e) {
        throw e;
      } finally {
        recordListPrev.value.loading = false;
      }
    }
  };

  const delRecord = async (journal_record_id: number) => {
    try {
      const res = await recordDelete(journal_record_id);
      recordList.value.data = recordList.value.data.filter(
        (r) => r.id !== journal_record_id
      );
      return res;
    } catch (e) {
      throw e;
    }
  };

  return {
    dataRecord,

    records,
    addRecords,

    categoryList,
    getCategories,

    serviceList,
    getService,
    getServicesMaster,

    masterList,
    getMastersService,
    getMasters,

    availableDayList,
    getAvailableDays,

    availableTimeList,
    getAvailableTimes,

    record,

    rezetDataStore,

    recordList,
    recordListPrev,
    getRecords,
    delRecord,
  };
});
