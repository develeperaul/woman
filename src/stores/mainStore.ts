import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import {
  lastJournalRecord,
  personnelCategory,
  salons,
  salonItem,
  serviceCategories,
  stories,
  story,
  upcomingEntry,
  rating,
  masterCard,
} from 'src/api/main';
import { DataVal } from 'src/models';
import {
  LastJournalRecordT,
  MasterT,
  MasterCardT,
  SalonT,
  SalonItemT,
  ServiseCategoriesT,
  StoriesT,
  StoryT,
  StoryGroupT,
  UpcomingEntryT,
} from 'src/models/api/main';

export default defineStore('main', () => {
  // start сторисы
  const storyIndex = ref<number | null>(null);
  const isStoriesActive = ref(false);
  const storyList = ref<DataVal<StoriesT[]>>({ loading: false, data: [] });
  const getStories = async () => {
    try {
      storyList.value.loading = true;
      const res = (await stories()).data;

      res.forEach((item) => getStory(item.id));
      storyList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      storyList.value.loading = false;
    }
  };

  const storyGroup = ref<DataVal<StoryGroupT>>({
    loading: false,
    data: {},
  });
  const getStory = async (story_id: number) => {
    try {
      const res = (await story(story_id)).data;
      storyGroup.value.data[story_id] = res;

      return res;
    } catch (e) {
      throw e;
    }
  };

  watch(storyIndex, (val) => {
    if (val) {
      if (!isStoriesActive.value) {
        getStory(val);
        isStoriesActive.value = true;
      } else {
        // storyItem.value.loading=true;
      }
    }
  });

  // end сторисы

  // start последняя запись
  const lastRecord = ref<DataVal<LastJournalRecordT | null>>({
    loading: false,
    data: null,
  });
  const getLastJournalRecord = async () => {
    try {
      lastRecord.value.loading = true;
      const res = (await lastJournalRecord()).data;
      lastRecord.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      lastRecord.value.loading = false;
    }
  };
  // end последняя запись

  // start услуги
  const serviceCategoryList = ref<DataVal<ServiseCategoriesT[]>>({
    loading: false,
    data: [],
  });
  const getServiceCategories = async () => {
    try {
      serviceCategoryList.value.loading = true;
      const res = await (await serviceCategories()).data;
      serviceCategoryList.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      serviceCategoryList.value.loading = false;
    }
  };
  // end услуги

  // start мастера относительно выбранного салона и категории
  const masters = ref<DataVal<MasterT[]>>({
    loading: false,
    data: [],
  });
  const getmasters = async (obj: { category_id: number; salon_id: number }) => {
    try {
      masters.value.loading = true;
      const res = (await personnelCategory(obj)).data;
      masters.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      masters.value.loading = false;
    }
  };
  // end мастера относительно выбранного салона и категории

  // start Список Салонов

  const salonLocal = useStorage('salon', {} as SalonT);

  const salonList = ref<DataVal<SalonT[]>>({
    loading: false,
    data: [],
  });
  const getSalons = async () => {
    try {
      const res = (await salons()).data;
      salonList.value.data = res;
      // console.log(salonList.value.data.length);
      salonLocal.value = res[0];
      console.log(salonLocal.value);
      if (
        salonList.value.data.length === 1 &&
        Object.keys(salonLocal.value).length === 0
      )
        salonLocal.value = res[0];
      return res;
    } catch (e) {
      throw e;
    }
  };
  const salon = ref<DataVal<SalonItemT | null>>({
    loading: false,
    data: null,
  });
  const getSalon = async (id: number) => {
    try {
      salon.value.loading = true;
      const res = (await salonItem(id)).data;
      salon.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      salon.value.loading = false;
    }
  };

  // end Список Салонов

  // start Ближайшая предстоящая запись пользователя

  const upcomingRecord = ref<DataVal<UpcomingEntryT | null>>({
    loading: false,
    data: null,
  });
  const getUpcomingEntry = async () => {
    try {
      upcomingRecord.value.loading = true;
      const res = (await upcomingEntry()).data;
      upcomingRecord.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      upcomingRecord.value.loading = false;
    }
  };
  // end Ближайшая предстоящая запись пользователя

  // start рейтинг
  const sendRating = async (rating_id: number) => {
    try {
      await rating(salonLocal.value.id, rating_id);
    } catch (e) {
      console.log(e);

      throw e;
    }
  };
  // end рейтинг

  // start карточка мастера
  const masterCardVal = ref<DataVal<MasterCardT | null>>({
    loading: false,
    data: null,
  });
  const getMasterCard = async (personnel_id: string) => {
    try {
      masterCardVal.value.loading = true;
      const res = (await masterCard(personnel_id)).data;
      masterCardVal.value.data = res;
      return res;
    } catch (e) {
      throw e;
    } finally {
      masterCardVal.value.loading = false;
    }
  };
  // end карточка мастера
  return {
    storyIndex,
    isStoriesActive,
    storyList,
    getStories,
    storyGroup,
    getStory,

    lastRecord,
    getLastJournalRecord,

    serviceCategoryList,
    getServiceCategories,

    masters,
    getmasters,

    salonLocal,
    salonList,
    getSalons,
    salon,
    getSalon,

    upcomingRecord,
    getUpcomingEntry,

    sendRating,

    masterCardVal,
    getMasterCard,
  };
});
