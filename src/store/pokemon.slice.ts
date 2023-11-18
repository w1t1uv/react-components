import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  name: string;
}

const initialState: PokemonState = {
  name: JSON.parse(localStorage.getItem('query') ?? ''),
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    saveValue(state, action: PayloadAction<string>) {
      state.name = action.payload;
      localStorage.setItem('query', JSON.stringify(state.name));
    },
  },
});

export const pokemonSliceActions = pokemonSlice.actions;
export const pokemonSliceReducer = pokemonSlice.reducer;
