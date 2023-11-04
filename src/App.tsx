import React from 'react';
import { PokemonSearch } from './PokemonSearch';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PokemonSearch />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
