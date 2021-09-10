import { isUsingMobile } from './isUsingMobile';

export const getBrowserLanguage = () => {
  if (process.browser) {
    // default the locale to English
    let lang = 'en';

    if (isUsingMobile) {
      lang = navigator.languages
        .find((x) => x.substr(0, 2) === navigator.language.substr(0, 2))
        .substr(0, 2);
    } else {
      lang = navigator.language;
    }

    console.log('getBrowserLanguage', lang);

    return lang;
  }
};
