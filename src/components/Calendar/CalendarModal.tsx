import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BiMessageSquareAdd, BiSpreadsheet } from 'react-icons/bi';
import CalendarModalAdd from './CalendarModalAdd';
import CalendarModalView from './CalendarModalView';

interface CalendarModalProps {
  selectDate: string;
  isView: boolean;
  isOpen: boolean;
  onClose: any;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  selectDate,
  isView,
  isOpen,
  onClose
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex width="100%" justify="space-between">
            <Button colorScheme="red" mr={3} onClick={onClose}>
              <AiOutlineClose fontSize="24px" />
            </Button>

            <Flex align="center" justify="center">
              {isView ? (
                <BiSpreadsheet fontSize="24px" />
              ) : (
                <BiMessageSquareAdd fontSize="24px" />
              )}
              <Box marginLeft={3}>{selectDate}</Box>
            </Flex>
            {isView ? (
              <Button colorScheme="green">
                <AiOutlineCheck fontSize="24px" />
              </Button>
            ) : (
              <div></div>
            )}
          </Flex>
        </ModalHeader>

        <ModalBody>
          {isView ? <CalendarModalView /> : <CalendarModalAdd />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CalendarModal;
