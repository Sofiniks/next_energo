'use client';
import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../layout/ContentLayout';
import ContainerLayout from '../layout/ContainerLayout';
import MainBanner from '../banners/MainBanner';
import Button from '../buttons/Button';
import { TabletContainer } from '@/theme/breakpoints';

const PageWrapper = styled(ContentLayout)`
  height: 95vh;
  position: relative;
  margin-bottom: 230px;
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
  }
  h3 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 20px;
    padding-left: 50px;
  }
`;
const ButtonWrapper = styled.div`
  padding-left: 50px;
`;
const BannerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  z-index: 2;
  width: 100%;
`;
const HeroSection = () => {
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
        <ContainerLayout>
          <TabletContainer>
            <MainBanner />
          </TabletContainer>
        </ContainerLayout>
      </BannerWrapper>
    </PageWrapper>
  );
};

export default HeroSection;
