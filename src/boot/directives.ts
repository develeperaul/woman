import { boot } from 'quasar/wrappers';
export default boot(({ app }) => {
  app.directive('pretty', {
    mounted: function (el: HTMLLinkElement, binding: any, vnode: any) {
      el.textContent = app.config.globalProperties.$pretty(binding.value);
    },
    updated: function (el: HTMLLinkElement, binding: any, vnode: any) {
      el.textContent = app.config.globalProperties.$pretty(binding.value);
    },
  });
  app.directive('amount-pretty', {
    mounted: function (el: HTMLLinkElement, binding: any, vnode: any) {
      el.textContent = amount(binding.value);
    },
    updated: function (el: HTMLLinkElement, binding: any, vnode: any) {
      el.textContent = amount(binding.value);
    },
  });

  function amount(val: string | number): string {
    return app.config.globalProperties.$pretty(val, '₽');
  }
});
