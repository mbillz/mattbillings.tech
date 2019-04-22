import React, { useRef } from 'react';
import { useRender, useThree } from 'react-three-fiber';
import WavyLine from './WavyLine';

const numLines = 200;
const lines = new Array(numLines).fill();

const AnimatedScene = () => {
  const group = useRef();
  const { camera } = useThree();

  let angle = 15;
  const radius = 15;

  useRender(() => {
    group.current.position.x = radius * Math.sin(angle);
    group.current.position.y = -radius * -Math.sin(angle);
    group.current.position.z = angle * -angle;
    angle += 0.005;
    camera.rotation.z += 0.001;
  });

  return (
    <group ref={group}>
      {lines.map((_, index) => (
        <WavyLine key={index} index={index} />
      ))}
    </group>
  );
};

export default AnimatedScene;
