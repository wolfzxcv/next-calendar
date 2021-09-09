import dynamic from 'next/dynamic';
import React from 'react';
import { Container } from '../components/Container';
import Login from '../components/Login/Login';

const Calendar = dynamic(() => import('../components/Calendar/Calendar'), {
  ssr: false
});

const Index = () => {
  return (
    <Container minH="100vh" overflow="hidden">
      <Login />
      <Calendar />
    </Container>
  );
};

export default Index;
