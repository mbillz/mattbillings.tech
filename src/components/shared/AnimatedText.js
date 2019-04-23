import React, { memo, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { node, number, string } from 'prop-types';

const AnimatedText = ({ children, delay, margin }) => {
  const [isReady, setIsReady] = useState(false);
  const textSpring = useSpring({
    to: {
      opacity: isReady ? 1 : 0,
      transform: isReady ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
    },
  });
  const init = () => setIsReady(true);

  useEffect(() => {
    setTimeout(init, delay);
    return () => {
      clearTimeout(init);
    };
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
