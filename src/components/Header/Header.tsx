import { Box, Flex } from '@chakra-ui/layout';
import dynamic from 'next/dynamic';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';

const LangSelector = dynamic(() => import('./LangSelector'), { ssr: false });

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Flex
      width="100%"
      justify="space-between"
      align="center"
      padding={3}
      position="sticky"
      top="0"
      zIndex={1}
    >
      <DarkModeSwitch />

      <Box display={{ base: 'none', md: 'block' }} fontSize={'4xl'}>
        {title}
      </Box>

      <LangSelector />
    </Flex>
  );
};

export default Header;
