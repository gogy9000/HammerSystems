import {request} from '../request'

export const axiosRequestBaseQueryFn = () =>
  async function ({ url, method, data, params }) {
    try {
      const result = await request(
        {
          url,
          method,
          data,
          params,
        },
      );
      return { data: result };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };