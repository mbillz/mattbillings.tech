import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Canvas } from 'react-three-fiber';
import AnimatedScene from './AnimatedScene';
import { colors } from '../../utils/variables';

const SceneBg = () => {
  const [isReady, setIsReady] = useState(false);
  const canvasSpring = useSpring({
    to: { opacity: isReady ? 1 : 0 },
    config: {
      duration: 5000,
    },
  });
  const init = () => setIsReady(true);

  useEffect(() => {
    setTimeout(init, 500);
    return () => {
      clearTimeout(init);
    };
  });

  return (
    <Base>
      <CanvasContainer style={canvasSpring}>
        <Canvas
          camera={{
            position: [0, 10, -100],
          }}
        >
          <AnimatedScene />
        </Canvas>
      </CanvasContainer>
    </Base>
  );
};

export default memo(SceneBg);

const Base = styled(animated.div)`
  background: ${colors.red};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const CanvasContainer = styled(animated.div)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
