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
      // domains: ['drive.google.com'],
    },
    // runtime: 'edge',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      if (dev) {
        
      }

      return config;
    },
    images: {
      domains: ['www.test.com'],
    },
    
    async rewrites() {
      if (phase === PHASE_DEVELOPMENT_SERVER) {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:9007/rest/:path*',
          },
          {
            source: '/images/:path*',
            destination: 'http://localhost:9007/images/:path*',
          },
        ];
      }
      return [];
     
    },
  };
};