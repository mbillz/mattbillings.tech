import React from 'react';
import Layout from '../components/shared/Layout';
import SocialIcons from '../components/shared/SocialIcons';
import { Container } from '../components/styled/Container';
import AnimatedScene from '../components/shared/AnimatedScene';

const IndexPage = () => {
  return (
    <Layout>
      <AnimatedScene />
      <Container>
        <SocialIcons />
      </Container>
    </Layout>
  );
};

export default IndexPage;
