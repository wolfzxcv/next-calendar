export const getCurrentLanguage = () => {
  if (process.browser) {
    const isUsingMobile =
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i);

    let lang = 'en';
    // Check browser language manually
    const isCN =
      (window as any)?.navigator.languages.includes('zh-CN') ||
      (window as any)?.navigator.languages.includes('zh-cn') ||
      null;

    if (isCN) {
      lang = 'cn';
    } else if (isUsingMobile) {
      // If it's a mobile, use substr(0, 2) to get lang ISO code, if it matches any of our app locales, set it as language
      const matchLang = navigator.languages
        .find((x) => x.substr(0, 2) === navigator.language.substr(0, 2))
        .substr(0, 2);
      if (matchLang === 'zh' || matchLang === 'en') {
        lang = matchLang;
      }
    }

    console.log('getCurrentLanguage', lang);

    return lang;
  }
};
