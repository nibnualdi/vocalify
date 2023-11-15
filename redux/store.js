import { configureStore } from "@reduxjs/toolkit";
import audioPlayerReducer from "./features/audioPlayerSlice";
import { songApi } from "./services/song";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerReducer,
    [songApi.reducerPath]: songApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(songApi.middleware),
});

setupListeners(store.dispatch);
