import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      {/* 
      The columns are set that depending on the device we are going to show 
      a different amount of columns.
      */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={'10px'}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer>
              <GameCardSkeleton key={s} />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
