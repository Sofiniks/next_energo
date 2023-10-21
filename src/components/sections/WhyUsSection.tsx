'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { DesktopContainer, TabletContainer } from '@/theme/breakpoints';
import { device } from '@/theme/breakpoints';
import ContainerLayout from '../layout/ContainerLayout';
import { SectionHeading } from '../typography/typography';
import { WhyUsSectionData } from '@/types/dataTypes';
import whyUsData from '@/data/whyUsSectionData.json';
import { textCut } from '@/utils/helpers';

const SectionWrapper = styled.section`
  margin-bottom: 90px;
`;

const AdvantagesList = styled.ul`
  display: flex;
  padding: 10px 0;
  @media ${device.lg} {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none !important;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 275px;
  height: 400px;
  transition: all 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HoverBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 201, 30, 0.8);
  padding: 10px;
  transition: all 0.3s;
  opacity: 0;

  h3 {
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }
`;

const BlockWithImage = styled.div`
  position: absolute;
  width: 275px;
  height: 120px;
  bottom: -10px;
  left: -10px;
  background-color: #ffc91e;
  padding: 20px 10px 20px 20px;
  transition: all 0.3s;
  transform: scale(1);

  h3 {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }
`;

const AdvantageItem = styled.li`
  margin-right: 30px;
  position: relative;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    ${HoverBlock} {
      opacity: 1;
    }

    ${BlockWithImage} {
      transform: scale(1.05);
    }
  }
`;

const BlockForTablets = styled.div`
  background-color: #ffc91e;
  width: 285px;
  min-height: 200px;
  padding: 20px;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0;
  }

  h3 {
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;

    @media ${device.sm} {
      font-size: 12px;
    }
  }
`;

export default function WhyUsSection() {
  const t = useTranslations('WhyUs');
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const advantagesListDesktop = (
    <AdvantagesList>
      {whyUsData.map((item: WhyUsSectionData, index) => (
        <AdvantageItem
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <ImageWrapper>
            <Image src={item.img} alt="advantage" height={400} width={275} />
          </ImageWrapper>
          {hoveredIndex === index ? (
            <HoverBlock>
              <h3>{t(`${item.title}`)}</h3>
              <p>{t(`${item.desc}`)}</p>
            </HoverBlock>
          ) : (
            <BlockWithImage>
              <h3>{t(`${item.title}`)}</h3>
              <p>{textCut(t(`${item.desc}`), 65)}</p>
            </BlockWithImage>
          )}
        </AdvantageItem>
      ))}
    </AdvantagesList>
  );

  const advantagesListTablet = (
    <AdvantagesList>
      {whyUsData.map((item: WhyUsSectionData, index) => (
        <AdvantageItem key={index}>
          <BlockForTablets>
            <h3>{t(`${item.title}`)}</h3>
            <p>{t(`${item.desc}`)}</p>
          </BlockForTablets>
        </AdvantageItem>
      ))}
    </AdvantagesList>
  );

  return (
    <SectionWrapper>
      <ContainerLayout>
        <SectionHeading text={t('sectionTitle')} />
        <DesktopContainer>{advantagesListDesktop}</DesktopContainer>
        <TabletContainer>{advantagesListTablet}</TabletContainer>
      </ContainerLayout>
    </SectionWrapper>
  );
}
