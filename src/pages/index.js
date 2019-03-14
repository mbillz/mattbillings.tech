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
import copy from '../utils/copy';

const IndexPage = () => {
  return (
    <Layout>
      <Background />
      <Container>
        <AnimatedText delay={200} x="-4rem">
          <Heading>{copy.name}</Heading>
        </AnimatedText>
        <AnimatedText delay={350} x="-3.5rem">
          <Subheading>{copy.role}</Subheading>
        </AnimatedText>
        <AnimatedText delay={500} x="-3rem">
          <Copy>
            <em>Specializing in: {copy.specializing}</em>
          </Copy>
        </AnimatedText>
        <AnimatedText delay={650} x="-2.5rem">
          <Copy>
            <em>Experienced with: {copy.experienced}</em>
          </Copy>
        </AnimatedText>
        <AnimatedText delay={800} x="-2rem">
          <Copy>
            <em>Experimenting with: {copy.experimenting}</em>
          </Copy>
        </AnimatedText>
        <Footer>
          <Footnote>
            Contact me at{' '}
            <MailLink href="mailto:mbillings@gmail.com?subject=Hi+Matt.+I'd+like+to+see+examples+of+your+work.">
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
