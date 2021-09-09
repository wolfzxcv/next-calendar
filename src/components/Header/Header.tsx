import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';

const Header: React.FC<{}> = () => {
  return (
    <Flex
      width="100%"
      justify="space-between"
      align="center"
      padding={{ base: 3, md: 5 }}
      position="sticky"
      top="0"
      zIndex={1}
      bg="inherit"
    >
      <DarkModeSwitch />

      <Box display={{ base: 'none', md: 'block' }} fontSize={'4xl'}>
        Alice
      </Box>
    </Flex>
  );
};

export default Header;
