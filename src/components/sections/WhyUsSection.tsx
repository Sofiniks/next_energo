'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import ContainerLayout from '../layout/ContainerLayout';
import { SectionHeading } from '../typography/typography';
import Image from 'next/image';

const data = [
  {
    title: 'whyTitle1',
    desc: 'whyDesc1',
    img: '/images/Services1.png',
  },
  {
    title: 'whyTitle2',
    desc: 'whyDesc2',
    img: '/images/land.png',
  },
  {
    title: 'whyTitle3',
    desc: 'whyDesc3',
    img: '/images/servicesBanner.jpg',
  },
  {
    title: 'whyTitle4',
    desc: 'whyDesc4',
    img: '/images/solar_battery.png',
  },
];

const SectionWrapper = styled.section`
  margin-bottom: 90px;
`;

const AdvantagesList = styled.ul`
  display: flex;
  &::-webkit-scrollbar {
    display: none !important;
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
  height: 115px;
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

export default function WhyUsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <SectionWrapper>
      <ContainerLayout>
        <SectionHeading text="Kapec mes?" />
        <AdvantagesList>
          {data.map((item, index) => (
            <AdvantageItem
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <ImageWrapper>
                <Image
                  src={item.img}
                  alt="advantage"
                  height={400}
                  width={275}
                />
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
      </ContainerLayout>
    </SectionWrapper>
  );
}
