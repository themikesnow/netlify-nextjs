import 'whatwg-fetch';
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';
import 'react-intersection-observer/test-utils';
import { mswServer } from './__mocks__/msw/server';
import AppUtils from './src/utils/App';

beforeAll(() => mswServer.listen({ onUnhandledRequest: 'error' }));
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

AppUtils.formatDate = jest.fn().mockReturnValue('TheDate');
