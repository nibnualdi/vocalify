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
  }),
})

export const { useGetAllSongsQuery } = songApi