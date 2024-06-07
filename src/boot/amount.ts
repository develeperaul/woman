import { boot } from 'quasar/wrappers';

import { InjectionKey } from 'vue';

export const setColorKey: InjectionKey<(key: number) => string> = Symbol();
export const percentKey: InjectionKey<(plan: number, fact: number) => number> =
  Symbol();
export const prettyKey: InjectionKey<
  (key1: string | number, key2?: string) => string
> = Symbol();
export default boot(({ app }) => {
  const setColor = (app.config.globalProperties.$setColor = (val: number) => {
    if (val < 50) return '#EF5350';
    if (val >= 50 && val < 75) return '#FFA000';
    return '#64DD17';
  });
  const format = (app.config.globalProperties.$format = function format(
    val: number
  ): string {
    const [num, num2 = ''] = val.toString().split('.');
    const parts = num.match(/\d{1,3}(?=(\d{3})*$)/g) as string[];

    const preffixList = {
      1: '',
      2: 'млн.',
      3: 'млрд.',
      4: 'трлн.',
      5: 'квлн.',
      6: 'квинтл.',
    } as Record<number, string>;
    const preffix = preffixList[parts.length - 1]
      ? preffixList[parts.length - 1]
      : '';

    if (val) {
      const znak = String(num).replace(/[^-]/gi, '');
      if (preffixList[parts.length - 1]) {
        const after = [parts!.slice(1, parts.length).join(''), num2]
          .join('')
          .slice(0, 2);
        return after
          ? znak +
              [parts!.slice(0, 1).join(' '), after].join(',') +
              ' ' +
              preffix
          : znak + parts!.slice(0, 1).join(' ') + ' ' + preffix;
      } else
        return znak + [parts!.join(' '), num2].filter((val) => !!val).join(',');
    }
    return '0';
  });
  const pretty = (app.config.globalProperties.$pretty = function pretty(
    val: string | number,
    after?: string
  ): string {
    return (format(+val) + ` ${after ?? ''}`).trim();
  });

  const percent = (plan: number, fact: number) => {
    return +((fact * 100) / plan).toFixed(2);
  };
  app.provide(setColorKey, setColor);
  app.provide(percentKey, percent);
  app.provide(prettyKey, pretty);
});
