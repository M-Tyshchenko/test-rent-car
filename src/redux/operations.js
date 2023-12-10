import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6570852909586eff66418c8d.mockapi.io';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/advert');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
