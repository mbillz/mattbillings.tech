import styled from 'styled-components';
import { viewports } from '../../utils/variables';

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 100vw;
  min-height: 100vh;
  padding: 1.5rem;
  position: relative;

  @media ${viewports.medium} {
    padding: 3.75rem;
  }
`;

export default Container;
