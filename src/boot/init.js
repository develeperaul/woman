import 'virtual:svg-icons-register';
import { vMaska } from 'maska';
// import { PushNotifications } from '@capacitor/push-notifications';
import { FCMTokenSend } from '/src/api/fcm';
export default async ({ app }) => {
  app.directive('maska', vMaska);
  // app.use(Maska);
  // console.log(PushNotifications);
  // PushNotifications.requestPermissions().then(async (result) => {
  //   console.log(result);
  //   if (result.receive === 'granted') {
  //     await PushNotifications.register();
  //     await PushNotifications.createChannel({
  //       id: 'relay',
  //       name: 'relay',

  //       importance: 2,
  //       visibility: 2,
  //       lights: true,

  //       vibration: true,
  //     });
  //     // await PushNotifications.deleteChannel({
  //     //   id: "fcm_fallback_notification_channel",
  //     // });
  //     // await PushNotifications.deleteChannel({
  //     //   id: "PushDefaultForeground",
  //     // });
  //     console.log(await PushNotifications.listChannels());
  //   }
  // });
  // await PushNotifications.addListener('registration', async (token) => {
  //   console.log('initss');
  //   const storage = window.localStorage;
  //   storage.setItem('fcmToken', token.value);
  //   await FCMTokenSend({ token: token.value });
  // });

  // await PushNotifications.addListener('registrationError', (err) => {
  //   console.error('Registration error: ', err.error);
  // });
  // await PushNotifications.addListener(
  //   'pushNotificationReceived',
  //   (notification) => {
  //     notification.vibration = true;
  //     console.info('notification : ', JSON.stringify(notification));
  //   }
  // );
  // await PushNotifications.addListener(
  //   'pushNotificationActionPerformed',
  //   (notification) => {
  //     router.push('/notifications');
  //   }
  // );
};
