import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterByBrand: '',
  filterByPrice: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterByBrand: (state, action) => {
      state.filterByBrand = action.payload;
    },
    changeFilterByPrice: (state, action) => {
      state.filterByPrice = action.payload;
    },
  },
});

export const { changeFilterByBrand, changeFilterByPrice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
