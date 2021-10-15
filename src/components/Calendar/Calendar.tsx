import { Box, Flex } from '@chakra-ui/layout';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { getBrowserLanguage } from '../../utils';
import CalendarFooter from './CalendarFooter';
import CalendarHeader from './CalendarHeader';
import Control from './Control';
require('moment/min/locales.min');

const Calendar: React.FC<{}> = () => {
  const now = new Date();
  const dateFormat = 'DD-MM-YYYY';
  const [selectDate, setSelectDate] = useState(moment(now));
  const [dates, setDates] = useState([]);

  useEffect(() => {
    getCalendarArray(selectDate);
  }, []);

  moment.locale(getBrowserLanguage());

  const lastMonth = () => {
    const newDate = moment(selectDate).subtract(1, 'month');
    updateData(newDate);
  };

  const nextMonth = () => {
    const newDate = moment(selectDate).add(1, 'month');
    updateData(newDate);
  };

  // update calender when user click date
  const handleSelectDate = (selectDate) => {
    const newDate = moment(selectDate, dateFormat);
    updateData(newDate);
  };

  const updateData = (newDate) => {
    setSelectDate(newDate);
    getCalendarArray(newDate);
  };

  const weekdaysShort = moment.weekdaysMin(true);

  // generate calendar array according to selectDate
  // return date array
  const getCalendarArray = (selectDate) => {
    // default to the beginning of the month
    let startDate = moment(selectDate).format('01-MM-YYYY');

    // default to the end of the month
    const daysInMonth = moment(selectDate).daysInMonth();
    let endDate = moment(selectDate).format(`${daysInMonth}-MM-YYYY`);

    const firstDate = selectDate
      .clone()
      .startOf('month')
      .startOf('week')
      .date();

    if (firstDate > 20) {
      // means the date is from last month
      const MMYYYY = moment(selectDate).subtract(1, 'month').format('MM-YYYY');
      startDate = moment(selectDate).format(`${firstDate}-${MMYYYY}`);
    }

    const lastDate = selectDate.clone().endOf('month').endOf('week').date();

    if (lastDate < 10) {
      // means the date is from next month
      const MMYYYY = moment(selectDate).add(1, 'month').format('MM-YYYY');
      endDate = moment(selectDate).format(`0${lastDate}-${MMYYYY}`);
    }

    const date = [];

    const formatStartDate = moment(startDate, dateFormat);
    const formatEndDate = moment(endDate, dateFormat);

    for (
      let m = moment(formatStartDate);
      m.isSameOrBefore(formatEndDate);
      m.add(1, 'days')
    ) {
      date.push(m.format(dateFormat));
    }

    const daysInWeek = 7;

    const dateArrayOfWeeks = [
      ...Array(Math.ceil(date.length / daysInWeek))
      // eslint-disable-next-line
    ].map((_) => date.splice(0, daysInWeek));

    setDates(dateArrayOfWeeks);
  };

  return (
    <Flex
      flexDirection="column"
      width={{ base: '90vw', md: '80vw' }}
      fontSize={{ base: '12px', md: '24px' }}
    >
      <Control
        lastMonth={lastMonth}
        selectDate={moment(selectDate).format('LL')}
        nextMonth={nextMonth}
      />

      {/* Calendar Header */}
      <CalendarHeader weekdays={weekdaysShort} />

      {/* Calendar Body */}
      {dates.map((everyWeek) => (
        <Flex width="100%" justify="space-evenly" key={everyWeek[0]}>
          {everyWeek.map((everyDay) => (
            <Flex
              flexDirection="column"
              justify="flex-start"
              border="1px"
              height="5em"
              borderColor="inherit"
              width="100%"
              padding={1}
              key={everyDay}
              fontSize={{ base: '12px', md: '24px' }}
              onClick={() => handleSelectDate(everyDay)}
              bg={
                moment(everyDay, dateFormat).format(dateFormat) ===
                selectDate.format(dateFormat)
                  ? 'blue.200'
                  : 'auto'
              }
            >
              <Box
                color={
                  moment(everyDay, dateFormat).format('MM') ===
                  selectDate.format('MM')
                    ? 'auto'
                    : 'blue.600'
                }
              >
                {moment(everyDay, dateFormat).format('DD')}
              </Box>
              {moment(everyDay, dateFormat).format('DD').includes('3') && (
                <>
                  <Box bg="blue.400">史迪奇</Box>
                  <Box bg="green.400">三眼</Box>
                </>
              )}
            </Flex>
          ))}
        </Flex>
      ))}

      {/* Calendar Footer */}
      <CalendarFooter selectDate={selectDate.format(dateFormat)} />
    </Flex>
  );
};

export default Calendar;
