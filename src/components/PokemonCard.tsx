import React from 'react';
import styled from 'styled-components';

interface PokemonCardProps {
  name: string;
  spriteUrl: string;
  number: number;
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 5px 5px 14px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 5px 14px -4px rgba(0,0,0,0.75);
  box-shadow: 5px 5px 14px -4px rgba(0,0,0,0.75);
`;

const Name = styled.h3`
  margin: 0;
  text-transform: capitalize;
`;

const Number = styled.p`
  margin: 0;
`;

const Sprite = styled.img`
  width: 96px;
  height: 96px;
`;

const PokemonCard: React.FC<PokemonCardProps> = ({ name, spriteUrl, number }) => {
  return (
    <Card>
      <Name>{name}</Name>
      <Sprite src={spriteUrl} alt={name} />
      <Number>#{number}</Number>
    </Card>
  );
};

export default PokemonCard;
