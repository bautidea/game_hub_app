import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = useGames();

  useGames();
  return (
    <>
      {error && <Text>{error}</Text>}

      {/* 
      The columns are set that depending on the device we are going to show 
      a different amount of columns.
      */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={'10px'}
        padding={'10px'}
      >
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
