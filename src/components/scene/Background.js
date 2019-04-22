import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Canvas } from 'react-three-fiber';
import AnimatedScene from './AnimatedScene';
import { colors } from '../../utils/variables';

const Background = () => {
  // const [isRed, setIsRed] = useState(true);
  const [backgroundSpring] = useSpring(() => {
    return {
      background: colors.red,
    };
  });

  // useEffect(() => {
  //   setInterval(() => {
  //     setIsRed(!isRed);
  //   }, 1000);
  // });

  return (
    <Base style={backgroundSpring}>
      <Canvas
        camera={{
          position: [0, 10, -100],
        }}
      >
        <AnimatedScene />
      </Canvas>
    </Base>
  );
};

export default Background;

const Base = styled(animated.div)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
