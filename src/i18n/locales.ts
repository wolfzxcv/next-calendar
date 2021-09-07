/** Files to modify locales
 *  next-i18next.config.js
 *  locales.ts
 *  */

/** Please use ISO codes to name locales as possible
 * https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 *  */

export type Locales = 'cn' | 'en' | 'zh';

interface localesOptions {
  code: Locales;
  value: string;
}

export const locales: Locales[] = ['cn', 'en', 'zh'];

export const localesOptions: localesOptions[] = [
  { code: 'cn', value: '简体' },
  { code: 'en', value: 'English' },
  { code: 'zh', value: '繁體' }
];
