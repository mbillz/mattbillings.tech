import React from 'react';
import Layout from '../components/shared/Layout';
import SocialIcons from '../components/shared/SocialIcons';
import Background from '../components/shared/Background';
import { Container } from '../components/styled/Container';
import {
  Heading,
  Subheading,
  Copy,
  Footnote,
  MailLink,
} from '../components/styled/Typography';
import { Footer } from '../components/styled/Footer';

const IndexPage = () => (
  <Layout>
    <Background />
    <Container>
      <Heading>Matt Billings</Heading>
      <Subheading>Web Developer</Subheading>
      <Copy>
        <em>Specializing in: React, Node, GraphQL, JavaScript, CSS, HTML</em>
      </Copy>
      <Copy>
        <em>Experienced with: Gatsby, NextJS, REST, React Native, AWS, PHP</em>
      </Copy>
      <Footer>
        <Footnote>
          Contact me at{' '}
          <MailLink href="mailto:mbillings@gmail.com">
            mbillings@gmail.com
          </MailLink>{' '}
          to receive examples of work.
        </Footnote>
        <SocialIcons />
      </Footer>
    </Container>
  </Layout>
);

export default IndexPage;
