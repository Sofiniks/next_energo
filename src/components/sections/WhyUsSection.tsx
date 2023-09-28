'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import ContainerLayout from '../layout/ContainerLayout';
import { SectionHeading } from '../typography/typography';
import Image from 'next/image';
import { DesktopContainer, TabletContainer } from '@/theme/breakpoints';
import { device } from '@/theme/breakpoints';
import { WhyUsSectionData } from '@/types/dataTypes';

const SectionWrapper = styled.section`
  margin-bottom: 90px;
`;

const AdvantagesList = styled.ul`
  display: flex;
  @media ${device.md} {
    width: 100%;
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
  const data: WhyUsSectionData[] = [
    {
      title: t('titles.1'),
      desc: t('descriptions.1'),
      img: '/images/Services1.png',
    },
    {
      title: t('titles.2'),
      desc: t('descriptions.2'),
      img: '/images/land.png',
    },
    {
      title: t('titles.3'),
      desc: t('descriptions.3'),
      img: '/images/servicesBanner.jpg',
    },
    {
      title: t('titles.4'),
      desc: t('descriptions.4'),
      img: '/images/solar_battery.png',
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const advantagesListDesktop = (
    <AdvantagesList>
      {data.map((item, index) => (
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
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </HoverBlock>
          ) : (
            <BlockWithImage>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </BlockWithImage>
          )}
        </AdvantageItem>
      ))}
    </AdvantagesList>
  );

  const advantagesListTablet = (
    <AdvantagesList>
      {data.map((item, index) => (
        <AdvantageItem key={index}>
          <BlockForTablets>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
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
