const Router = require('next/router');

Router.useRouter = () => ({
  route: '/',
  pathname: '',
  query: { id: 1 },
  asPath: '',
  prefetch: () => {},
  push: jest.fn(),
});

module.exports = Router;
