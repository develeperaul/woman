import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { Record } from 'src/models';
export default defineStore('records', () => {
  const records = ref<Record[]>([]);

  const addRecords = (obj: Record) => {
    records.value = [...records.value, obj];
  };

  return {
    records,
    addRecords,
  };
});
