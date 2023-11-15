// Icons from font-awesome library.
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
// Icons from material design.
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
// From bootstrap.
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

// In this component im handling the logic of mapping the name of a platform to an icon.

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // Object to be used as a mapper.
  // Each key represents the 'slug' of each platform, slug is the name of the platform but
  // all in lower case, so if the name is 'PlayStation' the slug is 'playstation'.
  // We are annotating the mapper with a Index Signature, '[key :string]' represents a property in this
  // object (we are saying that all keys are strings), so when we wrap this in '[]' we are defining
  // an Index Signature.
  // And each key is mapped to a value of type 'IconType'.
  const iconMapper: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    // Using HStack to display icons horizontally.
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <>
          {console.log(
            platform.slug
              .replace(/ps-vita/g, 'playstation')
              .replace(/((\d)*|(-)\w*)*/g, '')
          )}
          <Icon as={iconMapper[platform.slug]} color="gray.500" />
        </>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
