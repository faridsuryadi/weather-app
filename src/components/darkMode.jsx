import React from 'react';
import { Flex, Switch, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent={"flex-end"} p={5}>
      <Text fontSize="lg" mr="2">
        Dark Mode
      </Text>
      <Switch
        colorScheme="teal"
        size="md"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
    </Flex>
  );
};

export default DarkModeSwitch;
