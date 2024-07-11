import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'vvrmdv',

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config);
    // },
    experimentalMemoryManagement: true,
    experimentalOriginDependencies: true,

    // defaultCommandTimeout: 10000,
    numTestsKeptInMemory: 0,
    baseUrl: 'https://miguel--dev-blackmamba.netlify.app',
    // baseUrl: 'http://localhost:3000',

    // baseUrl: 'https://blackmamba-ui-miguel.vercel.app',
    // baseUrl: 'https://blackmamba-ui-git-miguel-themikesnows-projects.vercel.app/',
  },
  experimentalStudio: true,
  experimentalMemoryManagement: true,

  defaultCommandTimeout: 10000,
  numTestsKeptInMemory: 0,
  video: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  // component: {
  //   devServer: {
  //     framework: 'next',
  //     bundler: 'webpack',
  //   },
  // },
});
