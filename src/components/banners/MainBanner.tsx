'use client';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { device } from '@/theme/breakpoints';
import { MainBannerData } from '@/types/dataTypes';
import getIconComponent from '../icons/IconMapper';

const Banner = styled.div`
  z-index: 3;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

const StyledList = styled.ul`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none !important;
  }
  @media ${device.md} {
    min-width: 100%;
  }
`;

const StyledItem = styled.li`
  width: 25%;
  padding: 30px 18px 50px 18px;
  text-align: center;
  position: relative;
  transition: all 0.3s;
  background-color: #fff;
  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 128px;
    position: absolute;
    right: 0;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.08);
    transform: translateY(-50%);
  }
  &:last-of-type {
    &:after {
      display: none;
    }
  }

  &:hover {
    background-color: #ffc91e;
    transform: scaleY(1.07);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  @media ${device.md} {
    min-width: 300px;
    height: 300px;
  }
  h2 {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 27px;
`;
export default function MainBanner({ data }: { data: MainBannerData[] }) {
  const t = useTranslations('Hero');
  return (
    <Banner>
      <StyledList>
        {data.map((item) => (
          <StyledItem key={item.title}>
            <IconWrapper>{getIconComponent(item.iconKey)}</IconWrapper>
            <h2>{t(`${item.title}`)}</h2>
            <p>{t(`${item.subtitle}`)}</p>
          </StyledItem>
        ))}
      </StyledList>
    </Banner>
  );
}
