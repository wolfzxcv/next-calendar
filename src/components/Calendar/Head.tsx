import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

interface HeadProps {
  weekdays: string[];
}

const Head: React.FC<HeadProps> = ({ weekdays }) => {
  return (
    <Flex
      width="100%"
      justify="space-evenly"
      marginTop={5}
      fontWeight={600}
      color="red.600"
    >
      {weekdays.map((weekday) => (
        <Box
          border="1px"
          borderColor="inherit"
          width="100%"
          paddingY={3}
          textAlign="center"
          key={weekday}
        >
          {weekday}
        </Box>
      ))}
    </Flex>
  );
};

export default Head;
