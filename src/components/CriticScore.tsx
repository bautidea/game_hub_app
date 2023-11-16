// With this component we are displaying the critic score

import { Badge } from '@chakra-ui/react';

interface Prop {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Prop) => {
  const color = criticScore > 75 ? 'green' : criticScore > 60 ? 'yellow' : '';
  return (
    <Badge
      fontSize={'14px'}
      paddingX={2}
      borderRadius={'4px'}
      colorScheme={color}
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
