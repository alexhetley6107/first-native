import { createSlice } from '@reduxjs/toolkit';
import { fetchImages } from './fetchImages';

const initialState = {
	items: [],
	isLoading: true,
	success: false,
};

export const imageSlice = createSlice({
	name: 'image',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchImages.pending, (state, action) => {
			state.isLoading = true;
			state.success = false;
		});
		builder.addCase(fetchImages.fulfilled, (state, action) => {
			const data = action.payload;

			state.items = data.map((item) => {
				return { id: item.id, author: item.user.name, img: item.urls.full };
			});
			state.isLoading = false;
			state.success = true;
		});
		builder.addCase(fetchImages.rejected, (state, action) => {
			state.isLoading = false;
			state.success = false;
		});
	},
});

export default imageSlice.reducer;
