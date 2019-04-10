import React from 'react';
import Layout from '../components/shared/Layout';
import SocialIcons from '../components/shared/SocialIcons';
import Background from '../components/shared/Background';
import { Container } from '../components/styled/Container';

const IndexPage = () => {
  return (
    <Layout>
      <Background />
      <Container>
        <SocialIcons />
      </Container>
    </Layout>
  );
};

export default IndexPage;
