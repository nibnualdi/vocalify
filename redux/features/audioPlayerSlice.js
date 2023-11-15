import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  song: null,
  title: "",
  artistName: "",
  isPlaying: false,
  isLoading: false
}

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    setAudioTitleAndArtist: (state, action) => {
      state.title = action.payload.title
      state.artistName = action.payload.artistName
      state.song = action.payload.song
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setAudioTitleAndArtist, setIsPlaying, setIsloading } = audioPlayerSlice.actions

export default audioPlayerSlice.reducer
