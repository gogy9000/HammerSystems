import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {axiosRequestBaseQueryFn} from "./axiosBaseQueryFn";

export const baseApi = createApi({
    reducerPath: 'BASE_API',
    baseQuery: axiosRequestBaseQueryFn(),
    endpoints: () => ({})
})