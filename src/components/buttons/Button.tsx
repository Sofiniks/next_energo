'use client';

import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #ffc91e;
  border-radius: 3px;
  color: #282d33;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 40px;
  border: 1px solid #ffc91e;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

interface ButtonProps {
  text: string;
}
export default function Button({ text }: ButtonProps) {
  return <StyledButton>{text}</StyledButton>;
}
