import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  song: null,
  title: "",
  artistName: "",
  isPlaying: false,
  isLoading: false,
  id: "",
  imageUrl: "",
  searchInput: "",
};

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    setTitleAndArtist: (state, action) => {
      state.title = action.payload.title;
      state.artistName = action.payload.artistName;
      state.imageUrl = action.payload.imageUrl;
      state.id = action.payload.id;
    },
    setAudio: (state, action) => {
      state.song = action.payload.song;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setTitleAndArtist, setAudio, setIsPlaying, setIsloading, setSearchInput } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
