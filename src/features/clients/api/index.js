import { baseApi } from "../../../api";

const clientsApiWithTag = baseApi.enhanceEndpoints({ addTagTypes: [] });

const clientsApi = clientsApiWithTag.injectEndpoints({
  endpoints: (build) => ({
    clients: build.query({
      query: () => ({
        url: "/users",
        method:"get"
      })
    })
  })
});

export const { useClientsQuery } = clientsApi;