import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleton = () => {
  return (
    <Card width={'230px'} borderRadius={'10px'} overflow={'hidden'}>
      {/* 
        In this card we are going to have an skeleton, is like a placeholder 
        for an img that has been loaded.
      */}
      <Skeleton height={'200px'}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
