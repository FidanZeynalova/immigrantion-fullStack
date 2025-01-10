import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const imigrantApi = createApi({
  reducerPath: 'imigrantion',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
  endpoints: (builder) => ({
    getImigrants: builder.query({
      query: () => `imigrantion`,
    }),
  }),
})

export const { useGetImigrantsQuery } = imigrantApi