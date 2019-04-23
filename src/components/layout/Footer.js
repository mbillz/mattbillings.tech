import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MailLink, Footnote } from '../styled/Typography';
import SocialIcons from './SocialIcons';
import { viewports } from '../../utils/variables';
import useIsReady from '../../hooks/useIsReady';

const Footer = () => {
  const isReady = useIsReady(1000);
  const footerSpring = useSpring({
    to: {
      opacity: isReady ? 1 : 0,
    },
  });

  return (
    <Base style={footerSpring}>
      <Footnote>
        Contact me at&nbsp;
        <MailLink href="mailto:mbillings@gmail.com?subject=Hi+Matt.+I'd+like+to+see+examples+of+your+work.">
          mbillings@gmail.com
        </MailLink>
        &nbsp;to receive examples of work.
      </Footnote>
      <SocialIcons />
    </Base>
  );
};

export default memo(Footer);

const Base = styled(animated.footer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: auto;
  text-align: center;
  width: 100%;

  @media ${viewports.medium} {
    align-items: flex-end;
    flex-direction: row;
    text-align: left;
  }
`;
