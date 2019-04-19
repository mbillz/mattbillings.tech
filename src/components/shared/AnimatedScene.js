import React, { memo } from 'react';
import styled from 'styled-components';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import Controls from './Controls';

function Floor() {
  return (
    <mesh
      position={[0, 1, 0]}
      geometry={new THREE.CylinderGeometry()}
      material={
        new THREE.MeshPhongMaterial({
          color: '#fff',
          transparent: true,
          opacity: 0.6,
          shading: THREE.FlatShading,
        })
      }
    />
  );
}

const AnimatedScene = () => {
  return (
    <Base>
      <Canvas>
        <ambientLight color="#95a7c9" />
        <pointLight color="#95a7c9" intensity={0.2} position={[10, 10, 10]} />
        <Floor />
        <Controls />
      </Canvas>
    </Base>
  );
};

export default memo(AnimatedScene);

const Base = styled.div`
  background: #f5ce91;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
