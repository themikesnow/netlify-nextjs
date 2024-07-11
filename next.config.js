const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const path = require('path');

const { i18n } = require('./next-i18next.config');


module.exports = (phase, { defaultConfig }) => {
  
  return {
    i18n,
    sassOptions: {
      prependData: `@import "./styles/variables-sass.scss"; @import "./styles/global-sass.scss"; @import "./styles/mixins.scss";`,
    },
    images: {
      domains: ['www.test.com'],
    }
  };
};