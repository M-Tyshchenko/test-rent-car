import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterByBrand: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilterByBrand } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
