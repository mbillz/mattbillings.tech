import React, { memo } from 'react';
import { useRender, useThree } from 'react-three-fiber';
import WavyLine from './WavyLine';

const numLines = 200;
const lines = new Array(numLines).fill();

const AnimatedScene = () => {
  const { camera } = useThree();

  let angle = 15;
  const radius = 15;

  useRender(() => {
    camera.position.x = radius * Math.sin(angle);
    camera.position.y = -radius * -Math.sin(angle);
    camera.position.z = angle * -angle;
    camera.rotation.z += 0.001;
    angle += 0.005;
  });

  return lines.map((_, index) => <WavyLine key={index} index={index} />);
};

export default memo(AnimatedScene);
