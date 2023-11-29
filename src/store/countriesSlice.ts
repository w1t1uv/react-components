import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { ICountriesState } from '../types';

const initialState: string[] = [
  'Australia',
  'Austria',
  'Canada',
  'Czech Republic',
  'England',
  'Finland',
  'Germany',
  'Italy',
  'Latvia',
  'Mexico',
  'Netherlands',
  'Poland',
  'Serbia',
  'Sweden',
  'Ukraine',
  'United States of America',
];

const countriesSlice: Slice<ICountriesState> = createSlice({
  name: 'countries',
  initialState: {
    countries: initialState,
  },
  reducers: {
    setCountriesData(state: ICountriesState, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
  },
});

export default countriesSlice.reducer;
