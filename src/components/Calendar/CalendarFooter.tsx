import { Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiMessageSquareAdd, BiSpreadsheet } from 'react-icons/bi';
import CalendarModal from './CalendarModal';
import { DarkModeSwitch } from './DarkModeSwitch';

interface CalendarFooterProps {
  selectDate: string;
}

const CalendarFooter: React.FC<CalendarFooterProps> = ({ selectDate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isView, setIsView] = useState(true);

  const handleView = () => {
    onOpen();
    setIsView(true);
  };

  const handleAdd = () => {
    onOpen();
    setIsView(false);
  };
  return (
    <>
      <Flex
        width="100%"
        position="fixed"
        bottom={0}
        left={0}
        zIndex={1}
        justify="space-between"
        align="center"
      >
        <IconButton
          onClick={handleView}
          colorScheme="facebook"
          aria-label="view"
          width={{ base: '50px', md: '80px' }}
          height={{ base: '50px', md: '80px' }}
          icon={<BiSpreadsheet fontSize="32px" />}
        />

        <DarkModeSwitch />

        <IconButton
          onClick={handleAdd}
          colorScheme="facebook"
          aria-label="add"
          width={{ base: '50px', md: '80px' }}
          height={{ base: '50px', md: '80px' }}
          icon={<BiMessageSquareAdd fontSize="32px" />}
        />
      </Flex>

      <CalendarModal
        selectDate={selectDate}
        isView={isView}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default CalendarFooter;
