import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { node, number, string } from 'prop-types';
import useIsReady from '../../hooks/useIsReady';

const AnimatedText = ({ children, delay, margin }) => {
  const isReady = useIsReady(delay);
  const textSpring = useSpring({
    to: {
      opacity: isReady ? 1 : 0,
      transform: isReady ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
    },
  });

  return (
    <Base style={{ margin }}>
      <animated.div style={textSpring}>{children}</animated.div>
    </Base>
  );
};

AnimatedText.propTypes = {
  children: node.isRequired,
  delay: number.isRequired,
  margin: string.isRequired,
};

export default memo(AnimatedText);

const Base = styled.div`
  overflow: hidden;
`;
