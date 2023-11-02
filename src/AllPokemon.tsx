import React, { useEffect, useState } from 'react';
import { urlObject } from './server';
import { Pokemon } from './Pokemon';

interface pokemonData {
  name: string;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

interface responsePokemon {
  name: string;
  url: string;
}

export function AllPokemon() {
  const [allPokemon, setAllPokemon] = useState<pokemonData[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  async function fetchPokemon() {
    const url = urlObject.url;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Query execution error : ${response.status}`);
      }
      const data = await response.json();
      const { results } = data;

      const allPokemonData = await Promise.all(
        results.map(async (pokemon: responsePokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          if (!pokemonResponse.ok) {
            throw new Error(`Query execution error : ${pokemonResponse.status}`);
          }
          return pokemonResponse.json();
        })
      );

      setAllPokemon(allPokemonData);
      setIsLoaded(true);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      {isLoaded &&
        allPokemon.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            height={pokemon.height}
            isDefault={pokemon.isDefault ? 'Yes' : 'No'}
            order={pokemon.order}
            weight={pokemon.weight}
          />
        ))}
    </div>
  );
}
