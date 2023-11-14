import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/Logo/logo.webp';

const NavBar = () => {
  return (
    // In this component we want to layout our items horizontally, to do that
    // we use the component 'HStack' from Chakra UI.
    <HStack>
      {/* To use the image with Chakra we have to import it like a regular JS module */}
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
