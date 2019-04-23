import React, { memo } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/styled/Container';
import SceneBg from '../components/scene/SceneBg';
import Content from '../components/layout/Content';
import Footer from '../components/layout/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <SceneBg />
      <Container>
        <Content />
        <Footer />
      </Container>
    </Layout>
  );
};

export default memo(IndexPage);
