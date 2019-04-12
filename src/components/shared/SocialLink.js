import React, { memo } from 'react';
import styled from 'styled-components';
import { viewports } from '../../utils/variables';

const SocialLink = ({ children, url }) => {
  return (
    <Base
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="link"
    >
      {children}
    </Base>
  );
};

export default memo(SocialLink);

const Base = styled.a`
  display: block;
  height: 2.8125rem;
  margin-right: 1.5rem;
  transition: transform 200ms ease-out;
  width: 2.8125rem;

  &:last-of-type {
    margin-right: 0;
  }

  @media ${viewports.medium} {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
