import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFromFavorites: (state, action) => {
      const index = state.favorites.findIndex(
        car => car.id === action.payload.id
      );
      state.favorites.splice(index, 1);
    },
  },
});

export const { addFavorite, deleteFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
