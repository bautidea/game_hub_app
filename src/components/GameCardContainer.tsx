import { Box } from '@chakra-ui/react';
import { Children, ReactNode } from 'react';

// This component is used for creating a container for all cards, in order to
// have the same style across different cards.

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="230px" borderRadius={'10px'} overflow={'hidden'}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
