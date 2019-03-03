import styled from 'styled-components';
import { colors, viewports } from '../../utils/variables';

export const Heading = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

export const Subheading = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export const Copy = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5;

  & em {
    font-style: italic;
  }
`;

export const Footnote = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
`;

export const MailLink = styled.a`
  color: ${colors.contentBlack};
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
