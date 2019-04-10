import styled from 'styled-components';
import { viewports } from '../../utils/variables';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 80rem;
  min-height: 100vh;
  padding: 2rem;
  position: relative;

  @media ${viewports.medium} {
    justify-content: center;
    padding-top: 0;
  }
`;
