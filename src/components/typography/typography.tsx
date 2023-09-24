'use client';

import styled from 'styled-components';

const StyledHeading = styled.h2`
  text-transform: uppercase;
  margin-bottom: 38px;
  font-size: 32px;
  padding-left: 10px;
  border-left: 5px solid #ffc91e;
`;

interface HeadingProps {
  text: string;
}
export const SectionHeading = ({ text }: HeadingProps) => {
  return <StyledHeading>{text}</StyledHeading>;
}