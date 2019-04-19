import React, { memo, useRef } from 'react';
import { apply, useThree, useRender } from 'react-three-fiber';
import { OrbitControls } from '../../utils/OrbitControls';

apply({ OrbitControls });

const Controls = props => {
  const ref = useRef();
  const { camera } = useThree();
  useRender(() => ref.current.update());
  return <orbitControls ref={ref} args={[camera]} {...props} />;
};

export default memo(Controls);
