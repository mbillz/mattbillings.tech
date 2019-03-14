import styled from 'styled-components';
import { viewports } from '../../utils/variables';

export const Footer = styled.footer`
  align-items: flex-end;
  bottom: 4.375rem;

  justify-content: space-between;
  position: absolute;
  text-align: center;
  width: 100%;

  @media ${viewports.medium} {
    display: flex;
  }
`;
