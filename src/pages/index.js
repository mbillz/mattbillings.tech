import React from 'react';
import Layout from '../components/shared/Layout';
import SocialIcons from '../components/shared/SocialIcons';
import { Container } from '../components/styled/Container';
import Background from '../components/scene/Background';

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
