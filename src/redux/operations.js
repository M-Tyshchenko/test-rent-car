import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6570852909586eff66418c8d.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/advert');
      
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteCars = createAsyncThunk(
  'favorites/fetchAllFavorite',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/favorites');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (favoriteCar, thunkApi) => {
    try {
      const response = await axios.post('/favorites', favoriteCar);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (carId, thunkApi) => {
    try {
      const response = await axios.delete(`/favorites/${carId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
