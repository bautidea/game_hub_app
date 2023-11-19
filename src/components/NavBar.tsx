import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  handleSearch: (searchText: string) => void;
}

const NavBar = ({ handleSearch }: Props) => {
  return (
    // In this component we want to layout our items horizontally, to do that
    // we use the component 'HStack' from Chakra UI.
    <HStack padding="10px">
      {/* To use the image with Chakra we have to import it like a regular JS module */}
      <Image src={logo} boxSize="60px" />
      <SearchInput handleSearch={handleSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
