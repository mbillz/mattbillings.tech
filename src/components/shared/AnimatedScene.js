import React, { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { Canvas, apply, useRender } from 'react-three-fiber';
import * as meshline from 'three.meshline';

apply(meshline);

const numLines = 100;
const lines = new Array(numLines).fill();
const palette = ['#A2CCB6', '#FCEEB5', '#EE786E', '#EE786E'];

const Fatline = () => {
  const material = useRef();
  const [color] = useState(
    () => palette[parseInt(palette.length * Math.random())]
  );
  const [ratio] = useState(() => 0.5 + 0.5 * Math.random());
  const [width] = useState(() => Math.max(0.1, 0.3 * Math.random()));
  // Calculate wiggly curve
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(
      30 - 60 * Math.random(),
      -5,
      10 - 20 * Math.random()
    );
    return new Array(30)
      .fill()
      .map(() =>
        pos
          .add(
            new THREE.Vector3(
              2 - Math.random() * 4,
              4 - Math.random() * 2,
              5 - Math.random() * 10
            )
          )
          .clone()
      );
  });
  // Hook into the render loop and decrease the materials dash-offset
  useRender(() => (material.current.uniforms.dashOffset.value -= 0.0005));
  return (
    <mesh>
      {/** MeshLine and CMRCurve are a OOP factories, not scene objects, hence all the imperative code in here :-( */}
      <meshLine onUpdate={self => (self.parent.geometry = self.geometry)}>
        <geometry onUpdate={self => self.parent.setGeometry(self)}>
          <catmullRomCurve3
            args={[curve]}
            onUpdate={self => (self.parent.vertices = self.getPoints(500))}
          />
        </geometry>
      </meshLine>
      {/** MeshLineMaterial on the other hand is a regular material, so we can just attach it */}
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={ratio}
      />
    </mesh>
  );
};

const Scene = () => {
  let group = useRef();
  let theta = 0;
  // Hook into the render loop and rotate the scene a bit
  useRender(() =>
    group.current.rotation.set(
      0,
      5 * Math.sin(THREE.Math.degToRad((theta += 0.02))),
      0
    )
  );
  return (
    <group ref={group}>
      {lines.map((_, index) => (
        <Fatline key={index} />
      ))}
    </group>
  );
};

const AnimatedScene = () => {
  return (
    <Base>
      <Canvas
        style={{ background: '#324444' }}
        camera={{ position: [0, 50, 10], fov: 75 }}
      >
        <Scene />
      </Canvas>
    </Base>
  );
};

export default memo(AnimatedScene);

const Base = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
