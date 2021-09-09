import { Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { BiMessageSquareAdd, BiSpreadsheet } from 'react-icons/bi';

interface CalendarFooterProps {
  selectDate: string;
}

const CalendarFooter: React.FC<CalendarFooterProps> = ({ selectDate }) => {
  const handleView = () => {
    console.log('handleView', selectDate);
  };

  const handleAdd = () => {
    console.log('handleAdd', selectDate);
  };
  return (
    <Flex
      width="100%"
      position="fixed"
      bottom={1}
      left={0}
      justify="space-between"
    >
      <IconButton
        onClick={handleView}
        colorScheme="facebook"
        aria-label="view"
        width={{ base: '50px', md: '100px' }}
        height={{ base: '50px', md: '100px' }}
        icon={<BiSpreadsheet fontSize="32px" />}
      />
      <IconButton
        onClick={handleAdd}
        colorScheme="facebook"
        aria-label="add"
        width={{ base: '50px', md: '100px' }}
        height={{ base: '50px', md: '100px' }}
        icon={<BiMessageSquareAdd fontSize="32px" />}
      />
    </Flex>
  );
};

export default CalendarFooter;
