/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

import { Config } from '@app-constants';
import { setCredentials } from '@app-slice';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URI,
});

const addToken = (args: any, token: string) => {
  if (args.headers) {
    args.headers.Authorization = `Bearer ${token}`;
  } else {
    args.headers = { Authorization: `Bearer ${token}` };
  }
};
const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let token = localStorage.getItem('token');
  let refreshToken = localStorage.getItem('refreshToken');

  const theArgs = args;
  if (token && token != 'undefined') {
    addToken(theArgs, token);
  }
  let result = await baseQuery(theArgs, api, extraOptions);

  if ((result.error?.data as any)?.error === 'Token Expired') {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {
            method: 'POST',
            headers: { Authorization: `Bearer ${refreshToken}` },
            url: '/auth/refresh-token',
          },
          api,
          extraOptions
        );

        console.log('refreshResult', refreshResult);
        if (refreshResult.data) {
          /* @ts-ignore */
          token = refreshResult.data.token;
          /* @ts-ignore */
          refreshToken = refreshResult.data.refreshToken;

          localStorage.setItem('token', token);
          localStorage.setItem('refreshToken', refreshToken);

          api.dispatch(setCredentials({ token, refreshToken }));
          addToken(theArgs, token);

          // Retry the initial query
          result = await baseQuery(theArgs, api, extraOptions);
          console.log('result', result);
        } else {
          console.log('sdfasdfadsf OELSE ');
          window.location.href = '/login';
        }
      } finally {
        console.log('FINALLY release');
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      console.log('ELSE ');
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

// const logic = async (args, api, extraOptions) => {
//   // wait until the mutex is available without locking it
//   await mutex.waitForUnlock();
//   let token = localStorage.getItem('token');
//   let refreshToken = localStorage.getItem('refreshToken');

//   const theArgs = args;
//   if (token && token != 'undefined') {
//     addToken(theArgs, token);
//   }
//   let result = await baseQuery(theArgs, api, extraOptions);

//   if ((result.error?.data as any)?.error === 'Token Expired') {
//     if (!mutex.isLocked()) {
//       const release = await mutex.acquire();
//       try {
//         const refreshResult = await baseQuery(
//           {
//             method: 'POST',
//             headers: { Authorization: `Bearer ${refreshToken}` },
//             url: '/auth/refresh-token',
//           },
//           api,
//           extraOptions
//         );

//         console.log('refreshResult', refreshResult);
//         if (refreshResult.data) {
//           /* @ts-ignore */
//           token = refreshResult.data.token;
//           /* @ts-ignore */
//           refreshToken = refreshResult.data.refreshToken;

//           localStorage.setItem('token', token);
//           localStorage.setItem('refreshToken', refreshToken);

//           api.dispatch(setCredentials({ token, refreshToken }));
//           addToken(theArgs, token);

//           // Retry the initial query
//           result = await baseQuery(theArgs, api, extraOptions);
//           console.log('result', result);
//         } else {
//           console.log('sdfasdfadsf OELSE ');
//           window.location.href = '/login';
//         }
//       } finally {
//         console.log('FINALLY release');
//         // release must be called once the mutex should be released again.
//         release();
//       }
//     } else {
//       console.log('ELSE ');
//       // wait until the mutex is available without locking it
//       // await mutex.waitForUnlock();
//       // result = await baseQuery(args, api, extraOptions);
//       logic(args, api, extraOptions);
//     }
//   }
// };

export default customFetchBase;
