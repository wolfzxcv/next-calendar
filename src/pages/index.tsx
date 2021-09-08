import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import { Container } from '../components/Container';
import Header from '../components/Header/Header';

const Calendar = dynamic(() => import('../components/Calendar/Calendar'), {
  ssr: false
});

const Index = () => {
  const { t } = useTranslation(['common']);

  return (
    <Container minH="100vh">
      <Header title={t('system')} />

      <Calendar />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['common']))
  }
});

export default Index;
