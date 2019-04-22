import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Canvas } from 'react-three-fiber';
import AnimatedScene from './AnimatedScene';
import { colors } from '../../utils/variables';

const Background = () => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const bgColors = [colors.red, colors.blue];
  const bgColorSpring = useSpring({
    to: {
      backgroundColor: bgColors[sceneIndex],
    },
    config: {
      mass: 500,
    },
  });

  const changeSceneIndex = () => {
    if (sceneIndex === bgColors.length - 1) {
      setSceneIndex(0);
    } else {
      const nextScene = sceneIndex + 1;
      setSceneIndex(nextScene);
    }
  };

  useEffect(() => {
    setInterval(changeSceneIndex, 15000);
  });

  return (
    <Base style={bgColorSpring}>
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
