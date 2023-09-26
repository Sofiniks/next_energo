'use client';
import styled from 'styled-components';
import Button from '../buttons/Button';
import ContainerLayout from '../layout/ContainerLayout';
import MainBanner from '../banners/MainBanner';
import { DesktopContainer, device, TabletContainer } from '@/theme/breakpoints';

interface HeroSectionProps {
  isMainPage?: boolean;
}

const SectionWrapper = styled.div<{ $isMainPage: boolean }>`
  height: 95vh;
  padding-top: 80px;
  margin-bottom: ${({ $isMainPage }) => ($isMainPage ? '230px' : '80px')};
  position: relative;

  @media ${device.md} {
    margin-bottom: ${({ $isMainPage }) => ($isMainPage ? '300px' : 0)};
    height: 90vh;
    padding-top: 60px;
  }
`;

const Container = styled(ContainerLayout)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SectionBackground = styled.div<{ $url: string }>`
  background-image: ${({ $url }) => `url(${$url})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;
const SectionText = styled.div`
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
`;
const BannerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  @media ${device.md} {
    overflow-x: scroll;
    transform: translateY(100%);
    left: 0;
    &::-webkit-scrollbar {
      display: none !important;
    }
  }
`;

const HeroSection = ({ isMainPage }: HeroSectionProps) => {
  return (
    <SectionWrapper $isMainPage={Boolean(isMainPage)}>
      <SectionBackground $url="/images/mainBanner.jpg">
        <Container>
          <SectionText>
            <h1>Par mums</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              dolore debitis. Facere porro nesciunt eius accusamus repellat
              dolorum ducimus excepturi incidunt aperiam non! Eos accusantium
              nulla, porro veritatis alias beatae quidem dolore, harum,
            </h3>
            <ButtonWrapper>
              <Button text="Uzzinat par musu pakalpojumiem" />
            </ButtonWrapper>
          </SectionText>
        </Container>
        {isMainPage && (
          <>
            <DesktopContainer>
              <BannerWrapper>
                <ContainerLayout>
                  <MainBanner />
                </ContainerLayout>
              </BannerWrapper>
            </DesktopContainer>
            <TabletContainer>
              <BannerWrapper>
                <MainBanner />
              </BannerWrapper>
            </TabletContainer>
          </>
        )}
      </SectionBackground>
    </SectionWrapper>
  );
};

export default HeroSection;
