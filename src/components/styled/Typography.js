import styled from 'styled-components';
import { colors, viewports } from '../../utils/variables';

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

export const Subheading = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 5rem;
`;

export const BodyText = styled.p`
  border-bottom: 1px #000 solid;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5;

  & em {
    font-style: italic;
  }

  & strong {
    font-weight: 500;
  }

  @media ${viewports.medium} {
    border-bottom: 0;
  }

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const Footnote = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 133%;
  margin: 0 auto;
  width: 85%;

  @media ${viewports.medium} {
    font-size: 1.25rem;
    margin: 0;
    width: auto;
  }
`;

export const MailLink = styled.a`
  color: ${colors.black};
  display: inline-block;
  font-weight: 500;
  line-height: 125%;
  text-decoration: none;

  @media ${viewports.medium} {
    &:hover {
      text-decoration: underline;
    }
  }
`;
