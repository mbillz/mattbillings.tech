import React, { memo } from 'react';
import styled from 'styled-components';
import { colors, viewports } from '../../utils/variables';

const Background = () => {
  return (
    <Base>
      {/* <RedShape xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 732">
        <polygon points="0,0 1440,0 1440,378 0,732" />
      </RedShape>
      <YellowShape xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
        <polygon points="0,0 1440,70 1440,240 0,240" />
      </YellowShape> */}
    </Base>
  );
};

export default memo(Background);

const Base = styled.div`
  background: ${colors.blue};
  border-bottom: 1rem ${colors.red} solid;
  border-top: 1rem ${colors.yellow} solid;
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  @media ${viewports.medium} {
    background: ${colors.blue};
    border-bottom: 0;
    border-top: 0;
  }
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
