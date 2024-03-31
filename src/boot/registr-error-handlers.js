import { TimeoutError, HTTPError } from 'ky';
import { Notify } from 'quasar';

export default ({ app, router }) => {
  window.addEventListener('unhandledrejection', ({ reason: err }) => {
    errorHandler(err);
  });

  window.addEventListener('error', (errMessage) => {
    console.error('global', errMessage);
  });

  app.config.errorHandler = (err, vm, info) => {
    errorHandler(err);
  };

  function errorHandler(err) {
    if (err instanceof TimeoutError) {
      return;
    } else if (err instanceof HTTPError) {
      if (err.response.status === 401) {
        console.log(401);
        Notify.create({
          type: 'negative',
          message: 'Test 401',
          position: 'top',
        });
        return;
      } else if (err.response.status === 403) {
        console.log(403);
        Notify.create({
          type: 'negative',
          message: 'Test 403',
          position: 'top',
        });
        return;
      } else if (err.response.status === 404) {
        console.log(404);
        Notify.create({
          type: 'negative',
          message: 'Test 404',
          position: 'top',
        });
        return;
      } else if (err.response.status === 429) {
        console.log(429);
        Notify.create({
          type: 'negative',
          message: 'Test 429',
          position: 'top',
        });
        return;
      }
      Notify.create({
        type: 'negative',
        message: 'Ошибка сервера',
        position: 'top',
      });
      console.log(500);
      return;
    }

    console.log(err.response);
  }
};
