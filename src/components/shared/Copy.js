import React from 'react';
import styled from 'styled-components';
import { Heading, BodyText, Subheading } from '../styled/Typography';

const Copy = () => {
  return (
    <Base>
      <Heading>Matt Billings</Heading>
      <Subheading>Web developer</Subheading>
      <BodyText>
        <strong>Specializing in:</strong> React, Node, JavaScript, CSS, HTML,
        GraphQL
      </BodyText>
      <BodyText>
        <strong>Experienced in:</strong> Gatsby, React Native, Jest, AWS, PHP
      </BodyText>
      <BodyText>
        <strong>Experimenting with:</strong> ThreeJS
      </BodyText>
    </Base>
  );
};

export default Copy;

const Base = styled.div`
  margin-top: auto;
`;
