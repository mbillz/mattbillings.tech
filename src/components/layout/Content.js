import React, { memo } from 'react';
import styled from 'styled-components';
import { Heading, BodyText, Subheading } from '../styled/Typography';
import AnimatedText from '../shared/AnimatedText';
import { viewports } from '../../utils/variables';
import textContent from '../../utils/textContent';

const Content = () => {
  return (
    <Base>
      <AnimatedText delay={250} margin="0 0 1.25rem">
        <Heading>{textContent.heading}</Heading>
      </AnimatedText>
      <AnimatedText delay={1500} margin="0 0 5rem">
        <Subheading>{textContent.subheading}</Subheading>
      </AnimatedText>
      <AnimatedText delay={2000}>
        <BodyText>
          <strong>Specializing in:</strong>
          &nbsp;
          {textContent.specializing}
        </BodyText>
      </AnimatedText>
      <AnimatedText delay={2250}>
        <BodyText>
          <strong>Experienced in:</strong>
          &nbsp;
          {textContent.experienced}
        </BodyText>
      </AnimatedText>
      <AnimatedText delay={2500}>
        <BodyText>
          <strong>Experimenting in:</strong>
          &nbsp;
          {textContent.experimenting}
        </BodyText>
      </AnimatedText>
    </Base>
  );
};

export default memo(Content);

const Base = styled.main`
  margin-top: auto;
  text-align: center;

  @media ${viewports.medium} {
    text-align: left;
  }
`;
