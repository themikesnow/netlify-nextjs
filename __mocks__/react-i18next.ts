const lib = require('react-i18next');

const mock = {
  ...lib,
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ i18nKey }) => i18nKey,
};

module.exports = mock;
