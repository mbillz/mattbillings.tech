import React, { memo, useRef, useMemo } from 'react';
import * as THREE from 'three/src/Three';
import { Canvas, useRender } from 'react-three-fiber';
import styled from 'styled-components';

function Stars() {
  let group = useRef();
  let theta = 0;
  useRender(() => {
    // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
    const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.1)));
    const s = Math.cos(THREE.Math.degToRad(theta * 2));
    group.current.rotation.set(r, r, r);
    group.current.scale.set(s, s, s);
  });
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('lightblue'),
    });
    const coords = new Array(2000)
      .fill()
      .map(i => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, vertices, coords];
  }, []);
  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}

const Background = () => {
  return (
    <Base>
      <Canvas>
        <Stars />
      </Canvas>
    </Base>
  );
};

export default memo(Background);

const Base = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

// const RedShape = styled.svg`
//   display: none;
//   fill: ${colors.red};
//   left: 0;
//   right: 0;
//   position: absolute;
//   top: 0;

//   @media ${viewports.medium} {
//     display: block;
//   }
// `;

// const YellowShape = styled.svg`
//   display: none;
//   bottom: 0;
//   fill: ${colors.yellow};
//   left: 0;
//   position: absolute;
//   right: 0;

//   @media ${viewports.medium} {
//     display: block;
//   }
// `;
