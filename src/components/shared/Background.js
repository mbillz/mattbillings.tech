import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/variables';

const Background = () => {
  return <Base />;
};

export default memo(Background);

const Base = styled.div`
  background: ${colors.blue};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
