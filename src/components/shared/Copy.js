import React, { memo } from 'react';
import styled from 'styled-components';
import { Heading, BodyText, Subheading } from '../styled/Typography';
import AnimatedText from './AnimatedText';

const Copy = () => {
  return (
    <Base>
      <AnimatedText delay={250} margin="0 0 1.25rem">
        <Heading>Matt Billings</Heading>
      </AnimatedText>
      <AnimatedText delay={1500} margin="0 0 5rem">
        <Subheading>Web developer</Subheading>
      </AnimatedText>
      <AnimatedText delay={2000} margin="0">
        <BodyText>
          <strong>Specializing in:</strong> React, Node, JavaScript, CSS, HTML,
          GraphQL
        </BodyText>
      </AnimatedText>
      <AnimatedText delay={2250} margin="0">
        <BodyText>
          <strong>Experienced in:</strong> Gatsby, React Native, Jest, AWS, PHP
        </BodyText>
      </AnimatedText>
      <AnimatedText delay={2500} margin="0">
        <BodyText>
          <strong>Experimenting with:</strong> ThreeJS
        </BodyText>
      </AnimatedText>
      .
    </Base>
  );
};

export default memo(Copy);

const Base = styled.div`
  margin-top: auto;
`;
