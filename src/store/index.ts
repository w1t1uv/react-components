import { configureStore } from '@reduxjs/toolkit';
import { pokemonSliceReducer } from './pokemon.slice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
