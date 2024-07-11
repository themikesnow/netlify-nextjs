import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

type ApiResponse<T> = {
  data?: T;
  error?: FetchBaseQueryError | SerializedError;
};

export default ApiResponse;
