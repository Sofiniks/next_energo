'use client';
import { device } from '@/theme/breakpoints';
import styled from 'styled-components';

const ContainerLayout = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media ${device.lg} {
    max-width: 966px;
  }
  @media (max-width: 1000px) {
    max-width: calc(100vw - 60px);
  }
  @media ${device.sm} {
    max-width: calc(100vw - 20px);
  }
`;

export default ContainerLayout;
