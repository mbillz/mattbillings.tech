import React, { memo } from 'react';
import Layout from '../components/shared/Layout';
import Container from '../components/styled/Container';
import Background from '../components/scene/Background';
import Copy from '../components/shared/Copy';
import Footer from '../components/shared/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <Background />
      <Container>
        <Copy />
        <Footer />
      </Container>
    </Layout>
  );
};

export default memo(IndexPage);
