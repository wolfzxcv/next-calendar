import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import moment from 'moment';
import React, { useState } from 'react';
require('moment/min/locales.min');

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
  const now = new Date();
  const [displayDate, setDisplayDate] = useState(moment(now));
  const [selectDate, setSelectDate] = useState(moment(now));

  const isUsingMobile =
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i);

  // default the locale to English
  let matchLang = 'en';

  if (isUsingMobile) {
    matchLang = navigator.languages
      .find((x) => x.substr(0, 2) === navigator.language.substr(0, 2))
      .substr(0, 2);
  } else {
    matchLang = navigator.language;
  }

  // console.log('selectDate', selectDate);

  moment.locale(matchLang);
  const localLocale = moment(displayDate);

  const lastMonth = () => {
    setDisplayDate(moment(displayDate).subtract(1, 'month'));
  };

  const nextMonth = () => {
    setDisplayDate(moment(displayDate).add(1, 'month'));
  };

  const weekdaysShort = moment.weekdaysMin();

  // console.log('object', localLocale.endOf('month').date());

  return (
    <Flex
      flexDirection="column"
      width={{ base: '90vw', lg: '80vw' }}
      fontSize={{ base: '12px', lg: '24px' }}
    >
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
        <Box fontSize={{ base: '24px', lg: '48px' }}>
          {localLocale.format('LL')}
        </Box>
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

      <Flex
        width="100%"
        justify="space-evenly"
        marginTop={5}
        fontWeight={600}
        color="red.600"
      >
        {weekdaysShort.map((weekday) => (
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
    </Flex>
  );
};

export default Calendar;
