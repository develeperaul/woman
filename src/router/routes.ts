import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/OtherLayout.vue'),
    children: [
      {
        path: '',
        name: 'first',
        component: () => import('pages/First.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('pages/About.vue'),
        meta: {
          title: 'О салоне',
        },
      },
      //Записаться
      {
        path: '/to-record',
        name: 'to-record',
        component: () => import('pages/ToRecord/Index.vue'),
        meta: {
          title: 'Записаться',
          footer: true,
        },
      },
      {
        path: '/haircuts',
        name: 'haircuts',
        component: () => import('pages/ToRecord/Haircuts.vue'),
        meta: {
          title: 'Стрижки',
        },
      },

      {
        path: '/our-works',
        name: 'our-works',
        component: () => import('pages/OurWorks.vue'),
        meta: {
          title: 'Наши работы',
        },
      },

      {
        path: '/masters',
        props: (route) => ({
          query: {
            services_id: route.query.services_id,
            sub_services: route.query.sub_services,
          },
        }),
        name: 'masters',
        component: () => import('pages/ToRecord/Masters.vue'),

        meta: {
          title: 'Мастера',
        },
      },

      {
        path: '/services/:id',
        name: 'services',
        component: () => import('pages/ToRecord/Services.vue'),
        props: true,
        meta: {
          title: 'Услуги',
        },
      },

      {
        path: '/set-date/:master_id-:services_id-:sub_services_id',
        name: 'set-date',
        component: () => import('pages/ToRecord/Record.vue'),
        props: true,
        meta: {
          title: 'Дата и время',
        },
      },

      {
        path: '/records',
        name: 'records',
        component: () => import('pages/Records.vue'),
        meta: {
          title: 'Мои записи',
          footer: true,
        },
      },
      {
        path: '/others',
        name: 'others',
        component: () => import('pages/Other/Index.vue'),
        meta: {
          footer: true,
        },
      },

      {
        path: '/bonus',
        name: 'bonus',
        component: () => import('pages/Other/Bonus.vue'),
        meta: {
          title: 'Мои бонусы',
        },
      },
      {
        path: '/history-bonus',
        name: 'history-bonus',
        component: () => import('pages/Other/HistoryBonus.vue'),
        meta: {
          title: 'История начислений',
        },
      },
      {
        path: '/kosmetika',
        name: 'kosmetika',
        component: () => import('pages/Other/Kosmetika.vue'),
        meta: {
          title: 'Косметика',
        },
      },

      {
        path: '/kosmetika/:id',
        name: 'tovar',
        props: true,
        component: () => import('pages/Other/Tovar.vue'),
      },

      {
        path: '/actions',
        name: 'actions',
        component: () => import('pages/Other/Actions.vue'),
        meta: {
          title: 'Акции',
        },
      },

      {
        path: '/actions/:id',
        name: 'action',
        component: () => import('pages/Other/ActionView.vue'),
      },

      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/Profile.vue'),
      },

      {
        path: '/auth',
        name: 'auth',
        component: () => import('pages/Reg/Auth.vue'),
      },
      {
        path: '/verify',
        name: 'verify',
        component: () => import('pages/Reg/Verify.vue'),
      },

      {
        path: '/data',
        name: 'data',
        component: () => import('pages/Reg/Data.vue'),
      },

      {
        path: '/test',
        name: 'test',
        component: () => import('pages/Test.vue'),
      },

      // { path: '', component: () => import('pages/IndexPage.vue') }
    ],
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          footer: true,
        },
      },
      {
        path: '/master/:id',
        name: 'master',
        component: () => import('pages/Master.vue'),
        props: true,
        meta: {},
      },
      // { path: 'debug', component: () => import('pages/Debugs/Icons.vue') },
      // { path: '', component: () => import('pages/IndexPage.vue') }
    ],
  },

  {
    path: '/debug',
    component: () => import('layouts/DebugLayout.vue'),
    children: [
      { path: 'icon', component: () => import('pages/Debugs/Icons.vue') },
      // { path: '', component: () => import('pages/IndexPage.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
