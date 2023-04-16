import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

interface Pokemon {
  pokemon: Object;
}

interface PokemonListProps {
  selectedPokemonType: string;
}

interface Object {
  name: string;
  url: string;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PokemonList: React.FC<PokemonListProps> = ({ selectedPokemonType }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (selectedPokemonType !== '') {
      fetch(`https://pokeapi.co/api/v2/type/${selectedPokemonType}`)
      .then(response => response.json())
      .then(data => setPokemonList(data.pokemon));
    }
  }, [selectedPokemonType]);

  return (
    <Container>
      {pokemonList.map((pokemon, index) => {
        const pokemon_object = pokemon.pokemon;
        const name = pokemon.pokemon.name;
        const url = pokemon.pokemon.url;
        const number = parseInt(url.split('/')[6]);
        const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
        return <PokemonCard key={index} name={name} spriteUrl={spriteUrl} number={number} />;
      })}
    </Container>
  );
};

export default PokemonList;
