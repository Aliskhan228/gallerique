import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../store/slices/photosSlice"

export const store = configureStore({
	reducer: {
		photos: photosReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	}),
})