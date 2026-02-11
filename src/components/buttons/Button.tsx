'use client';

import styled from 'styled-components';
import { device } from '@/theme/breakpoints';

const StyledButton = styled.button`
  background-color: #c9a24d;
  border-radius: 3px;
  color: #282d33;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 40px;
  border: 1px solid #c9a24d;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  @media ${device.sm} {
    padding: 14px 20px;
  }
`;

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
export default function Button({ text, onClick, type, disabled }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} type={type || 'button'} disabled={disabled}>
      {text}
    </StyledButton>
  );
}
