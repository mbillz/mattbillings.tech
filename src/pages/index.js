import React from 'react';
import Layout from '../components/shared/Layout';
import SocialIcons from '../components/shared/SocialIcons';
import Background from '../components/shared/Background';
import { Container } from '../components/styled/Container';
import {
  Subheading,
  Copy,
  Footnote,
  MailLink,
  Heading,
} from '../components/styled/Typography';
import { Footer } from '../components/styled/Footer';
import AnimatedText from '../components/shared/AnimatedText';

const IndexPage = () => {
  return (
    <Layout>
      <Background />
      <Container>
        <AnimatedText delay={200} x="-4rem">
          <Heading>Matt Billings</Heading>
        </AnimatedText>
        <AnimatedText delay={350} x="-3.5rem">
          <Subheading>Web Developer</Subheading>
        </AnimatedText>
        <AnimatedText delay={500} x="-3rem">
          <Copy>
            <em>
              Specializing in: React, Node, GraphQL, JavaScript, CSS, HTML
            </em>
          </Copy>
        </AnimatedText>
        <AnimatedText delay={650} x="-2.5rem">
          <Copy>
            <em>
              Experienced with: Gatsby, NextJS, REST, React Native, AWS, PHP
            </em>
          </Copy>
        </AnimatedText>
        <AnimatedText delay={800} x="-2rem">
          <Copy>
            <em>Experimenting with: ThreeJS</em>
          </Copy>
        </AnimatedText>
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
};

export default IndexPage;
