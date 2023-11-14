import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    // In this component we want to layout our items horizontally, to do that
    // we use the component 'HStack' from Chakra UI.
    <HStack justifyContent="space-between" padding="10px">
      {/* To use the image with Chakra we have to import it like a regular JS module */}
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
