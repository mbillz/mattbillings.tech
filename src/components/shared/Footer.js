import React, { memo } from 'react';
import styled from 'styled-components';
import { MailLink, Footnote } from '../styled/Typography';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <Base>
      <Footnote>
        Contact me at{' '}
        <MailLink href="mailto:mbillings@gmail.com?subject=Hi+Matt.+I'd+like+to+see+examples+of+your+work.">
          mbillings@gmail.com
        </MailLink>{' '}
        to receive examples of work.
      </Footnote>
      <SocialIcons />
    </Base>
  );
};

export default memo(Footer);

const Base = styled.footer`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
`;
