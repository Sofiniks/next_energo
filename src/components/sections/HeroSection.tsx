'use client';
import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../layout/ContentLayout';
import ContainerLayout from '../layout/ContainerLayout';
import MainBanner from '../banners/MainBanner';
import Button from '../buttons/Button';
import { device } from '@/theme/breakpoints';

interface HeroSectionProps {
  isBannerVisible?: boolean;
}

const PageWrapper = styled(ContentLayout)`
  height: 95vh;
  position: relative;
  margin-bottom: 230px;

  @media ${device.sm} {
    height: 90vh;
  }
`;

const HeroBackground = styled.div<{ $url: string }>`
  background-image: ${({ $url }) => `url(${$url})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

const HeroText = styled.div`
  padding-top: 10%;
  max-width: 560px;
  color: white;

  h1 {
    text-transform: uppercase;
    font-size: 54px;
    font-weight: bold;
    margin-bottom: 23px;
    padding-left: 32px;
    border-left: 10px solid #ffc91e;

    @media ${device.md} {
      font-size: 40px;
      padding-left: 18px;
      border-left: 8px solid #ffc91e;
    }

    @media ${device.sm} {
      font-size: 25px;
      padding-left: 10px;
      border-left: 5px solid #ffc91e;
    }
  }
  h3 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 20px;
    padding-left: 50px;

    @media ${device.md} {
      padding-left: 33px;
    }

    @media ${device.sm} {
      padding-left: 20px;
      font-size: 16px;
    }
  }
`;
const ButtonWrapper = styled.div`
  padding-left: 50px;

  @media ${device.md} {
    padding-left: 33px;
  }

  @media ${device.sm} {
    padding-left: 20px;
  }
`;
const BannerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  z-index: 2;
  width: 100%;

  @media ${device.md} {
    left: 0;
    right: unset;
    width: 100%;
    overflow-x: scroll;
    transform: translateY(100%);
  }
`;
const HeroSection = ({ isBannerVisible }: HeroSectionProps) => {
  return (
    <PageWrapper>
      <HeroBackground $url="/images/mainBanner.jpg">
        <ContainerLayout>
          <HeroText>
            <h1>Pakalpojumi ar fosilo energiju</h1>
            <h3>
              Izmantojot tradicionālos enerģijas avotus, galvenais elements ir
              ikmēneša pakalpojumu maksa! Savā darbā mēs klientiem piedāvājam
              alternatīvus energotaupības veidus, nezaudējot komfortu.
            </h3>
            <ButtonWrapper>
              <Button text="uzzinat vairak par musu pakalpojumiem" />
            </ButtonWrapper>
          </HeroText>
        </ContainerLayout>
      </HeroBackground>
      <BannerWrapper>
        <ContainerLayout>{isBannerVisible && <MainBanner />}</ContainerLayout>
      </BannerWrapper>
    </PageWrapper>
  );
};

export default HeroSection;
