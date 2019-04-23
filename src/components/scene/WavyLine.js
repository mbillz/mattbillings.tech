import React, { memo, useRef, useState } from 'react';
import { apply, useRender } from 'react-three-fiber';
import * as meshline from 'three.meshline';
import { number } from 'prop-types';
import { colors } from '../../utils/variables';

apply(meshline);

const WavyLine = ({ index }) => {
  const material = useRef();

  const [curve] = useState(() => {
    const geo = new Float32Array(600);
    for (let j = 0; j < 200 * 6; j += 3) {
      geo[j] = -30 + 1 * j;
      geo[j + 1] = 1 * Math.cos(0.1 * j);
      geo[j + 2] = -20;
    }
    return geo;
  });

  useRender(() => {
    material.current.uniforms.dashOffset.value -= 0.005;
  });

  return (
    <mesh position={[0, 0, 100 - index * 5]}>
      <meshLine onUpdate={self => (self.parent.geometry = self.geometry)}>
        <geometry onUpdate={self => self.parent.setGeometry(curve)} />
      </meshLine>
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest={false}
        lineWidth={0.25}
        color={colors.yellow}
        dashArray={2}
        dashRatio={0.25}
        dashOffset={index * 0.05}
      />
    </mesh>
  );
};

WavyLine.propTypes = {
  index: number.isRequired,
};

export default memo(WavyLine);
