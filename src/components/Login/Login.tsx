import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const Login: React.FC<{}> = () => {
  return (
    <Flex
      width="100%"
      height="auto"
      justify="center"
      align="center"
      padding={{ base: 3, md: 5 }}
      position="sticky"
      top="0"
      zIndex={1}
      bg="inherit"
    >
      <Box>史迪奇</Box>
    </Flex>
  );
};

export default Login;
