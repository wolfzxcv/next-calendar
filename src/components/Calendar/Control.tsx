import { Box, Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

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
      <IconButton
        onClick={lastMonth}
        colorScheme="facebook"
        aria-label="lastMonth"
        size="lg"
        icon={<RiArrowLeftSLine fontSize="36px" />}
      />

      <Box fontSize={{ base: '24px', md: '48px' }}>{selectDate}</Box>

      <IconButton
        onClick={nextMonth}
        colorScheme="facebook"
        aria-label="nextMonth"
        size="lg"
        icon={<RiArrowRightSLine fontSize="36px" />}
      />
    </Flex>
  );
};

export default Control;
