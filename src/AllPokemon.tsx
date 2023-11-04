import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Pokemon } from './Pokemon';
import { urlObject } from './server';

function AllPokemon() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const navigate = useNavigate();
  const url = urlObject.url;

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`${url}?offset=${(page - 1) * 10}&limit=10`);
        setPokemonData(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      } catch (e) {
        console.error(`Error: ${e}`);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [page]);

  const onPageChange = (newPage: number) => {
    query.set('page', newPage.toString());
    navigate(`?${query.toString()}`);
  };

  return (
    <div>
      {loading && <p className="loading">Loading</p>}
      {!loading &&
        pokemonData.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            height={pokemon.height}
            isDefault={pokemon.isDefault ? 'Yes' : 'No'}
            order={pokemon.order}
            weight={pokemon.weight}
          />
        ))}
      <div className="wrapper">
        <button
          className="button pagination-button"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          prev
        </button>
        <button className="button pagination-button" onClick={() => onPageChange(page + 1)}>
          next
        </button>
      </div>
    </div>
  );
}

export default AllPokemon;
