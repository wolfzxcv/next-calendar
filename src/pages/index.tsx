import { Box } from '@chakra-ui/layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { Container } from '../components/Container';
import Header from '../components/Header/Header';

const Index = () => {
  const { t } = useTranslation(['common']);

  return (
    <Container minH="100vh">
      <Header title={t('system')} />

      <Box height="2000px" bg="white">
        123
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['common']))
  }
});

export default Index;
