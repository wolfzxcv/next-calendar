import dynamic from 'next/dynamic';
import React from 'react';
import { Container } from '../components/Container';
import Header from '../components/Header/Header';

const Calendar = dynamic(() => import('../components/Calendar/Calendar'), {
  ssr: false
});

const Index = () => {
  return (
    <Container minH="100vh">
      <Header />
      <Calendar />
    </Container>
  );
};

export default Index;
