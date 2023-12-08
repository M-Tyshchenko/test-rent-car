import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCars,
  fetchFavoriteCars,
  addFavorite,
  deleteFavorite,
} from './operations';

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const handlePending = state => state.isLoading.true;
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFetchCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};
const handleFetchFavoriteCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favorites = action.payload;
};
const handleAddFavoriteCarFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favorites.push(action.payload);
};
const handleDeleteFavoriteCarFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.favorites.findIndex(car => car.id === action.payload.id);
  state.favorites.splice(index, 1);
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFetchCarsFulfilled)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchFavoriteCars.pending, handlePending)
      .addCase(fetchFavoriteCars.fulfilled, handleFetchFavoriteCarsFulfilled)
      .addCase(fetchFavoriteCars.rejected, handleRejected)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, handleAddFavoriteCarFulfilled)
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(deleteFavorite.pending, handlePending)
      .addCase(deleteFavorite.fulfilled, handleDeleteFavoriteCarFulfilled)
      .addCase(deleteFavorite.rejected, handleRejected),
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
