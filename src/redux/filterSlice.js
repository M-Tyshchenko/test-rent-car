import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterBrand: '',
  filterPrice: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterBrand: (state, action) => {
      state.filterBrand = action.payload;
    },
    changeFilterPrice: (state, action) => {
      state.filterPrice = action.payload;
    },
  },
});

export const { changeFilterBrand, changeFilterPrice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
