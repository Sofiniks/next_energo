'use client';
import styled from 'styled-components';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from 'react-scroll';
import Button from '../buttons/Button';
import ContainerLayout from '../layout/ContainerLayout';
import MainBanner from '../banners/MainBanner';
import HeroSectionModal from '../modals/HeroSectionModal';
import { DesktopContainer, device, TabletContainer } from '@/theme/breakpoints';
import bannerData from '../../data/mainBanner.json';

interface HeroSectionProps {
  isMainPage?: boolean;
  sectionTitle: string;
  sectionContent: string;
}

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,.7);
z-index: 9;
`;

const SectionWrapper = styled.div<{ $isMainPage: boolean }>`
  min-height: 900px;
  height: 95vh;
  padding-top: 40px;
  margin-bottom: ${({ $isMainPage }) => ($isMainPage ? '230px' : '80px')};
  position: relative;

  @media ${device.md} {
    margin-bottom: ${({ $isMainPage }) => ($isMainPage ? '300px' : 0)};
    height: 90vh;
    min-height: 90%;
    padding-top: 50px;
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
  position: relative;
`;
const SectionText = styled.div`
  max-width: 560px;
  color: white;
  z-index: 3;
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
      font-size: 22px;
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
  @media ${device.sm} {
    padding-left: 0;
  }
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

const HeroSection = ({
  isMainPage,
  sectionContent,
  sectionTitle,
}: HeroSectionProps) => {
  const t = useTranslations('Hero');
  const [isModalOpen, setIsModalOpen] = useState(false); // Add modal state

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SectionWrapper $isMainPage={Boolean(isMainPage)}>
      <SectionBackground
        $url={`/images/${
          isMainPage ? 'MainBannerOverlay.jpg' : 'servicesBanner.jpg'
        }`}
      >
        <Container>
          <SectionText>
            <h1>{t(`${sectionTitle}`)}</h1>
            <h3>{t(`${sectionContent}`)}</h3>
            <ButtonWrapper>
              {isMainPage ? (
                <Button text={t('button')} onClick={handleOpenModal}/>
              ) : (
                <Link
                  to={isMainPage ? 'contactUs' : 'services'}
                  spy={true}
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button text={t('button')} />
                </Link>
              )}
            </ButtonWrapper>
          </SectionText>
        </Container>
        {isMainPage && (
          <>
            <DesktopContainer>
              <BannerWrapper>
                <ContainerLayout>
                  <MainBanner data={bannerData} />
                </ContainerLayout>
              </BannerWrapper>
            </DesktopContainer>
            <TabletContainer>
              <BannerWrapper>
                <MainBanner data={bannerData} />
              </BannerWrapper>
            </TabletContainer>
          </>
        )}
      </SectionBackground>
      {isModalOpen && <Overlay/>}
      {isModalOpen && <HeroSectionModal onClose={handleCloseModal} />}
    </SectionWrapper>
  );
};

export default HeroSection;
