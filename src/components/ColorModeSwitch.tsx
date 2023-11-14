import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    // Using HStack because we want to have a switch and next to it a label
    <HStack>
      {/* 
        To work with color modes we have to use a custom hook defined in chakra.
        isChecked is use to indicate which option is on and which is off. 
      */}
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
