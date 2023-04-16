import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';

const navItems = [
  /* { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' } */
  {}
];

const dropdownItems = [
  { title: 'Normal', type: 'normal' },
  { title: 'Fogo', type: 'fire' },
  { title: 'Água', type: 'water' },
  { title: 'Elétrico', type: 'electric' },
  { title: 'Grama', type: 'grass' },
  { title: 'Gelo', type: 'ice' },
  { title: 'Lutador', type: 'fighting' },
  { title: 'Veneno', type: 'poison' },
  { title: 'Terra', type: 'ground' },
  { title: 'Voador', type: 'flying' },
  { title: 'Psíquico', type: 'psychic' },
  { title: 'Inseto', type: 'bug' },
  { title: 'Pedra', type: 'rock' },
  { title: 'Fantasma', type: 'ghost' },
  { title: 'Dragão', type: 'dragon' },
  { title: 'Escuridão', type: 'dark' },
  { title: 'Metal', type: 'steel' },
  { title: 'Fada', type: 'fairy' }
];

const App: React.FC = () => {
  const [selectedPokemonType, setSelectedPokemonType] = useState('');

  const handlePokemonTypeSelect = (pokemonType: string) => {
    setSelectedPokemonType(pokemonType);
  };

  return (
    <div>
      <Navbar
        title="Pokemon Fetcher"
        navItems={navItems}
        dropdownTitle="Select Pokemon Type"
        dropdownItems={dropdownItems}
        onPokemonTypeSelect={handlePokemonTypeSelect}
      />
      <PokemonList selectedPokemonType={selectedPokemonType} />
    </div>
  );
};

export default App;
