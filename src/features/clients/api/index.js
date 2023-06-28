import {baseApi} from "../../../api";

const clientsApiWithTag = baseApi.enhanceEndpoints({addTagTypes: []});

const clientsApi = clientsApiWithTag.injectEndpoints({
    endpoints: (build) => ({
        clients: build.query({
            query: () => ({
                url: "/users",
                method: "get"
            }),

        }),
        client: build.query({
            query: ({id}) => ({
                url: `/users/${id}`,
                method: "get"
            }),

        }),
        patchClient: build.mutation({
            query: ({id, data}) => ({
                url: `/users/${id}`,
                method: "patch",
                data
            }),

        })
    })
});

export const {useClientsQuery, useClientQuery, usePatchClientMutation} = clientsApi;