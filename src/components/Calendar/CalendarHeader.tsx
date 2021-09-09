import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

interface CalendarHeaderProps {
  weekdays: string[];
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ weekdays }) => {
  return (
    <Flex
      width="100%"
      justify="space-evenly"
      fontWeight={600}
      color="red.600"
      marginTop={1}
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

export default CalendarHeader;
