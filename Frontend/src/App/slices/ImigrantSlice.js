import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const imigrantApi = createApi({
  reducerPath: 'imigrantion',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
  endpoints: (builder) => ({
    getImigrants: builder.query({
      query: () => `imigrantion`,
    }),
    getImigrant: builder.query({
      query: (id) => `imigrantion/${id}`,
    }),
    postImigrant: builder.mutation({
      query: (newData) => ({
        url: `imigrantion`,
        body: newData,
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
    }),
    deleteData: builder.mutation({
      query: (id) => ({
        url: `imigrantion/${id}`,
        method: "DELETE"
      })
    })
  }),
})

export const { useGetImigrantsQuery,useGetImigrantQuery,usePostImigrantMutation,useDeleteDataMutation } = imigrantApi