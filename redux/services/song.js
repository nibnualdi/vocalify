import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const songApi = createApi({
  reducerPath: 'songApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL, 
    headers: {
      'x-hasura-admin-secret': process.env.EXPO_PUBLIC_API_KEY,
      'content-type': 'application/json'
    }
  }),
  endpoints: (builder) => ({
    getAllSongs: builder.query({
      query: () => 'songs',
    }),
    getAllSongsExceptSelectedOne: builder.query({
      query: (id) => {
        console.log("id from midleware: ", id)
        return `songs/except/${id}`
      },
    }),
  }),
})

export const { useGetAllSongsQuery, useLazyGetAllSongsExceptSelectedOneQuery } = songApi