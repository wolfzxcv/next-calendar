import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

interface ControlProps {
  lastMonth: MouseEventHandler<HTMLButtonElement>;
  selectDate: string;
  nextMonth: MouseEventHandler<HTMLButtonElement>;
}

const Control: React.FC<ControlProps> = ({
  lastMonth,
  selectDate,
  nextMonth
}) => {
  return (
    <Flex justify="space-between" align="center">
      <Button
        size="lg"
        fontSize={{ base: '30px', lg: '72px' }}
        height="auto"
        lineHeight="auto"
        onClick={lastMonth}
      >
        {'<'}
      </Button>
      <Box fontSize={{ base: '24px', lg: '48px' }}>{selectDate}</Box>
      <Button
        size="lg"
        fontSize={{ base: '30px', lg: '72px' }}
        height="auto"
        lineHeight="auto"
        onClick={nextMonth}
      >
        {'>'}
      </Button>
    </Flex>
  );
};

export default Control;
