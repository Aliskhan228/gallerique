import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PhotoService from "../../API/PhotoService";

const initialState = {
	photos: {
		items: [],
		status: 'idle',
		error: null,
		totalCount: null
	},
	photo: {
		item: {},
		status: 'idle',
		error: null
	},
	searchedPhotos: {
		items: [],
		status: 'idle',
		error: null,
		totalCount: null,
		totalPages: null
	}
}

export const getPhotos = createAsyncThunk('photos/getPhotos', async ({ limit, page }) => {
	const response = await PhotoService.getAll(limit, page);

	return response;
});

export const getPhotoById = createAsyncThunk('photos/getPhotoById', async (id) => {
	const response = await PhotoService.getById(id);

	return response;
});

export const getPhotosByQuery = createAsyncThunk('photos/getPhotosByQuery', async ({ limit, page, query }) => {
	const response = await PhotoService.getByQuery(limit, page, query);
	
	return response;
});

export const photosSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getPhotos.pending, (state) => {
				state.photos.status = 'loading';
			})
			.addCase(getPhotos.fulfilled, (state, action) => {
				state.photos.status = 'succeeded';
				state.photos.items = action.payload.data;
				state.photos.totalCount = action.payload.headers["x-total"];
			})
			.addCase(getPhotos.rejected, (state, action) => {
				state.photos.status = 'failed';
				state.photos.error = action.error.message;
			})
			
			.addCase(getPhotoById.pending, (state) => {
				state.photo.status = 'loading';
			})
			.addCase(getPhotoById.fulfilled, (state, action) => {
				state.photo.status = 'succeeded';
				state.photo.item = action.payload.data;
			})
			.addCase(getPhotoById.rejected, (state, action) => {
				state.photo.status = 'failed';
				state.photo.error = action.error.message;
			})
			
			.addCase(getPhotosByQuery.pending, (state) => {
				state.searchedPhotos.status = 'loading';
			})
			.addCase(getPhotosByQuery.fulfilled, (state, action) => {
				state.searchedPhotos.status = 'succeeded';
				state.searchedPhotos.items = action.payload.data.results;
				state.searchedPhotos.totalPages = action.payload.data.total_pages;
			})
			.addCase(getPhotosByQuery.rejected, (state, action) => {
				state.searchedPhotos.status = 'failed';
				state.searchedPhotos.error = action.error.message;
			})
	}
})

export const selectAllPhotos = state => state.photos.photos.items
export const selectSearchedPhotos = state => state.photos.searchedPhotos.items

export default photosSlice.reducer