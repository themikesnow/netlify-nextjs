// /** @type {import('next-i18next').UserConfig} */
// module.exports = {
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'de'],
//   },
// }
// import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);

// import path from 'path';
// import url from 'url';

// console.log('url', url)

// const __filename = url.fileURLToPath(import.meta.url);

console.log('SETTING PATH')
process.env.I18NEXT_DEFAULT_CONFIG_PATH = __filename;
console.log('SETTING PATH', __filename)

// /** @type {import('next-i18next').UserConfig} */
// const i18Config = {
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'de'],
//   },
// };

// export default i18Config;

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
}