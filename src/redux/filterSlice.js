import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterBrand: '',
  filterPrice: '',
  filterMileageFrom: '',
  filterMileageTo: '',
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
    changeFilterMileageFrom: (state, action) => {
      state.filterMileageFrom = action.payload;
    },
    changeFilterMileageTo: (state, action) => {
      state.filterMileageTo = action.payload;
    },
  },
});

export const {
  changeFilterBrand,
  changeFilterPrice,
  changeFilterMileageFrom,
  changeFilterMileageTo,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
