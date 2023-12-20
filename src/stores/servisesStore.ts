import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { Master, Servise } from 'src/models';
export default defineStore('masters', () => {
  const servicesList = ref<Servise[]>([
    {
      id: 1,
      name: 'Стрижки',
      url: '/strigki.png',
      sub_services: [
        {
          id: 1,
          name: 'Женская стрижка',
          text: 'Описание',
          price: 'от 1 200 ₽',
          time: '~40 мин',
        },
        {
          id: 2,
          name: 'Лечебная стрижка',
          text: 'Описание',
          price: 'от 1 200 ₽',
          time: '~40 мин',
        },
        {
          id: 3,
          name: 'Стрижка челки',
          text: 'Описание',
          price: 'от 1 200 ₽',
          time: '~40 мин',
        },
        {
          id: 4,
          name: 'Подравнивание кончиков',
          text: 'Описание',
          price: 'от 1 200 ₽',
          time: '~40 мин',
        },
      ],
    },
    {
      id: 2,
      name: 'Маникюр',
      url: '/manikur.png',
      sub_services: [],
    },
    {
      id: 3,
      name: 'Педикюр',
      url: '/pedikur.png',
      sub_services: [],
    },
  ]);
  const masters = ref<Master[]>([
    {
      id: 1,
      name: 'Ксения Попова',
      position: 'Мастер',
      url: '/test.jpeg',
      dates: getDates(),
      price: '1 000 ₽',
      time: '1 ч',
      servicesList: [
        {
          id: 1,
          price: '',
          time: '',
          name: 'Стрижки',
          sub_services: [
            {
              id: 1,
              name: 'Женская стрижка',
              price: '1 000 ₽',
              time: '1 ч',
            },
            {
              id: 2,
              name: 'Лечебная стрижка',
              price: '1 100 ₽',
              time: '45 мин',
            },
          ],
        },
      ],
      text: 'Ольга в бьюти-сфере более 5 лет. Специализируется на длинных волосах, сложном окрашивании',
      works: ['/test.jpeg', '/test.jpeg', '/test.jpeg'],
    },
    {
      id: 2,
      name: 'Марина Попова',
      position: 'Парикмахер-универсал',
      url: '/test.jpeg',
      dates: getDates(),
      price: '1 000 ₽',
      time: '1 ч',

      servicesList: [
        {
          id: 1,
          price: '',
          time: '',
          name: 'Стрижки',
          sub_services: [
            {
              id: 1,
              name: 'Женская стрижка',
              price: '1 000 ₽',
              time: '1 ч',
            },
            {
              id: 2,
              name: 'Лечебная стрижка',
              price: '1 100 ₽',
              time: '45 мин',
            },
          ],
        },
        {
          id: 2,
          price: '',
          time: '',
          name: 'Маникюр',
          sub_services: [
            {
              id: 1,
              name: 'Маникюр',
              price: '1 000 ₽',
              time: '1 ч',
            },
          ],
        },
      ],
      text: 'Ольга в бьюти-сфере более 5 лет. Специализируется на длинных волосах, сложном окрашивании',
      works: [],
    },
  ]);

  const getMaster = (id: number) => {
    const master = masters.value.find((item) => item.id === id);
    if (master) return master;
    return null;
  };

  const fastRecord = computed(() => {
    return masters.value[0];
  });
  return {
    masters,
    servicesList,
    getMaster,
  };
});
function getDates() {
  return [...Array(10)].map((item, index) => {
    return {
      // day: dayjs().locale('ru').add(index, 'day').format('DD.MM_dd'),
      day: dayjs().locale('ru').add(index, 'day').format('YYYY-MM-DD'),
      times: ['12:00', '13:00', '15:00'],
    };
  });
}
