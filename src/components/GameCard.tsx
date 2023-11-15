import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Img, Text } from '@chakra-ui/react';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={'10px'} overflow={'hidden'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>

        {game.platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </CardBody>
    </Card>
  );
};

export default GameCard;
