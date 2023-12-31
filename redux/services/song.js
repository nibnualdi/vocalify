import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    headers: {
      "x-hasura-admin-secret": process.env.EXPO_PUBLIC_API_KEY,
      "content-type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllSongs: builder.query({
      query: () => "songs",
    }),
    getAllSongsExceptSelectedOne: builder.query({
      query: (id) => {
        return `songs/except/${id}`;
      },
    }),
    getASongById: builder.query({
      query: (id) => {
        return `song/${id}`;
      },
    }),
    getAllArtists: builder.query({
      query: () => {
        return `artists`;
      },
    }),
    getAllSongsByArtistName: builder.query({
      query: (name) => {
        return `songs/artist/${name}`;
      },
    }),
    searchSongsByTitle: builder.query({
      query: (title) => {
        return `songs/search/%25${title}%25`;
      },
    }),
    searchArtistsByName: builder.query({
      query: (title) => {
        return `artists/search/%25${title}%25`;
      },
    }),
  }),
});

export const {
  useGetAllSongsQuery,
  useGetAllSongsExceptSelectedOneQuery,
  useGetASongByIdQuery,
  useGetAllArtistsQuery,
  useGetAllSongsByArtistNameQuery,
  useLazySearchSongsByTitleQuery,
  useLazySearchArtistsByNameQuery,
} = songApi;
