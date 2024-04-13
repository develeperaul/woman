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
        path: '/about/:id',
        name: 'about',
        props: true,
        component: () => import('pages/About.vue'),
        meta: {
          title: 'О салоне',
          auth: true,
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
          auth: true,
        },
      },
      {
        path: '/haircuts',
        name: 'haircuts',
        component: () => import('pages/ToRecord/Haircuts.vue'),
        meta: {
          title: 'Стрижки',
          auth: true,
        },
      },

      {
        path: '/our-works',
        name: 'our-works',
        component: () => import('pages/OurWorks.vue'),
        meta: {
          title: 'Наши работы',
          auth: true,
        },
      },

      {
        path: '/masters',

        name: 'masters',
        component: () => import('pages/ToRecord/Masters.vue'),

        meta: {
          title: 'Мастера',
          auth: true,
        },
      },

      {
        path: '/services/:id',
        name: 'services',
        component: () => import('pages/ToRecord/Services.vue'),
        props: true,
        meta: {
          title: 'Услуги',
          auth: true,
        },
      },

      {
        path: '/set-date/',
        name: 'set-date',
        component: () => import('pages/ToRecord/Record.vue'),
        meta: {
          title: 'Дата и время',
          auth: true,
        },
      },

      {
        path: '/records',
        name: 'records',
        component: () => import('pages/Records.vue'),
        meta: {
          title: 'Мои записи',
          footer: true,
          auth: true,
        },
      },
      {
        path: '/others',
        name: 'others',
        component: () => import('pages/Other/Index.vue'),
        meta: {
          footer: true,
          auth: true,
        },
      },

      {
        path: '/bonus',
        name: 'bonus',
        component: () => import('pages/Other/Bonus.vue'),
        meta: {
          title: 'Мои бонусы',
          auth: true,
        },
      },
      {
        path: '/history-bonus',
        name: 'history-bonus',
        component: () => import('pages/Other/HistoryBonus.vue'),
        meta: {
          title: 'История начислений',
          auth: true,
        },
      },
      {
        path: '/kosmetika',
        name: 'kosmetika',
        component: () => import('pages/Other/Kosmetika.vue'),
        meta: {
          title: 'Косметика',
          auth: true,
        },
      },

      {
        path: '/kosmetika/:id',
        name: 'tovar',
        props: true,
        component: () => import('pages/Other/Tovar.vue'),
        meta: {
          auth: true,
        },
      },

      {
        path: '/actions',
        name: 'actions',
        component: () => import('pages/Other/Actions.vue'),
        meta: {
          title: 'Акции',
          auth: true,
        },
      },

      {
        path: '/actions/:id',
        props: true,

        name: 'action',
        component: () => import('pages/Other/ActionView.vue'),
        meta: {
          auth: true,
        },
      },

      {
        path: '/notifications',
        name: 'notifications',
        component: () => import('pages/Other/Notifications.vue'),
        meta: {
          title: 'Push-уведомления',
          // auth: true,
        },
      },

      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/Profile.vue'),
        meta: {
          auth: true,
        },
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
        meta: {
          auth: true,
        },
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
          auth: true,
        },
      },
      {
        path: '/master/:id',
        name: 'master',
        component: () => import('pages/Master.vue'),
        props: true,
        meta: {
          auth: true,
        },
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
