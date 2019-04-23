import styled from 'styled-components';
import { colors, viewports } from '../../utils/variables';

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 600;
`;

export const Subheading = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
`;

export const BodyText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 133%;

  & em {
    font-style: italic;
  }

  & strong {
    font-weight: 500;
  }
`;

export const Footnote = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 133%;
  margin: 0 auto 1.5rem;

  @media ${viewports.medium} {
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
