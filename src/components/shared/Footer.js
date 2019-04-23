import React, { memo, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MailLink, Footnote } from '../styled/Typography';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const [isReady, setIsReady] = useState(false);
  const footerSpring = useSpring({
    to: {
      opacity: isReady ? 1 : 0,
    },
  });
  const init = () => setIsReady(true);

  useEffect(() => {
    setTimeout(init, 1000);
    return () => {
      clearTimeout(init);
    };
  });

  return (
    <Base style={footerSpring}>
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

const Base = styled(animated.footer)`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
`;
