import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModalState: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { changeModalState } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
