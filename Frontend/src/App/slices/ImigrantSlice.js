import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const imigrantApi = createApi({
  reducerPath: 'imigrantion',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
  endpoints: (builder) => ({
    getImigrants: builder.query({
      query: () => `imigrantion`,
    }),
<<<<<<< HEAD
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
=======
    addImigrand:builder.mutation({
        query:(newImigrant) => ({
            
        })
>>>>>>> a360247e502a296ef5caf4f5f828236034d9ff60
    })
  }),
})

export const { useGetImigrantsQuery,useGetImigrantQuery,usePostImigrantMutation,useDeleteDataMutation } = imigrantApi