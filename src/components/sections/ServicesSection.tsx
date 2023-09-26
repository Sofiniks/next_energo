'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import ContainerLayout from '../layout/ContainerLayout';
import Button from '../buttons/Button';
import { device } from '@/theme/breakpoints';

interface SubService {
  title: string;
  desc: string[];
  images: string[];
}
interface Service {
  service: {
    title: string;
    subServices: SubService[];
  };
}

export const fossilServices: Service[] = [
  {
    service: {
      title: 'fossilService1Title',
      subServices: [
        {
          title: 'fossilService1Subtitle1',
          desc: ['fossilService1Desc1'],
          images: [
            '/images/Services1.png',
            '/images/Services2.png',
            '/images/Services3.png',
            '/images/Services4.png',
          ],
        },
        {
          title: 'fossilService1Subtitle2',
          desc: ['fossilService1Desc2'],
          images: [
            '/images/Services1.png',
            '/images/Services2',
            '/images/Services4.png',
          ],
        },
        {
          title: 'fossilService1Subtitle3',
          desc: ['fossilService1Desc3'],
          images: ['/images/Services3.png', '/images/Services4.png'],
        },
        {
          title: 'fossilService1Subtitle4',
          desc: ['fossilService1Desc4.png'],
          images: ['/images/Services2.png'],
        },
      ],
    },
  },
  {
    service: {
      title: 'fossilService2Title',
      subServices: [
        {
          title: 'fossilService2Subtitle1',
          desc: ['fossilService2Desc1'],
          images: [
            '/images/Services1.png',
            '/images/Services2.png',
            '/images/Services3.png',
            '/images/Services4.png',
          ],
        },
        {
          title: 'fossilService2Subtitle2',
          desc: ['fossilService2Desc2'],
          images: [
            '/images/Services1.png',
            '/images/Services2.png',

            '/images/Services4.png',
          ],
        },
      ],
    },
  },
  {
    service: {
      title: 'fossilService3Title',
      subServices: [
        {
          title: 'fossilService3Subtitle1',
          desc: ['fossilService3Desc1'],
          images: [
            '/images/Services1.png',
            '/images/Services2.png',
            '/images/Services3.png',
            '/images/Services4.png',
          ],
        },
        {
          title: 'fossilService3Subtitle2',
          desc: ['fossilService3Desc2'],
          images: [
            '/images/Services1.png',
            '/images/Services2.png',
            '/images/Services4.png',
          ],
        },
        {
          title: 'fossilService3Subtitle3',
          desc: ['fossilService3Desc3', 'iso1', 'iso2'],
          images: [
            '/images/Services1.png',
            '/images/Services2',
            '/images/Services4.png',
          ],
        },
      ],
    },
  },
  {
    service: {
      title: 'fossilService4Title',
      subServices: [
        {
          title: 'fossilService4Subtitle1',
          desc: ['fossilService4Desc1pt1', 'fossilService4Desc1pt2'],
          images: [
            '/images/Services1.png',
            '/images/Services2.png',
            '/images/Services3.png',
            '/images/Services4.png',
          ],
        },
        {
          title: 'fossilService4Subtitle2',
          desc: [
            'fossilService4Desc2pt1.png',
            'fossilService4Desc2pt2',
            'fossilService4Desc2pt3',
            'fossilService4Desc2pt4',
          ],
          images: [
            '/images/Services1.png',
            '/images/Services2.png',
            '/images/Services4.png',
          ],
        },
      ],
    },
  },
  {
    service: {
      title: 'fossilService5Title',
      subServices: [
        {
          title: 'fossilService5Subtitle1',
          desc: ['fossilService5Desc1'],
          images: [
            '/images/Services1.png',
            '/images/Services2.png',
            '/images/Services3.png',
            '/images/Services4.png',
          ],
        },
      ],
    },
  },
];

const ServicesWrapper = styled.div`
  margin-bottom: 80px;
`;

const ServicesContainer = styled(ContainerLayout)`
  display: flex;
  justify-content: space-between;
  @media ${device.md} {
    flex-direction: column;
  }
`;

const ServicesMenu = styled.div`
  background-color: #fff;
  margin-right: 40px;
  min-width: 30%;
  @media ${device.md} {
    margin-right: 0;
    min-height: 450px;
    margin-bottom: 20px;
  }
`;

const ServicesContent = styled.div`
  background-color: #fff;
  padding: 20px 20px 40px 20px;
`;

const ServicesHeading = styled.div`
  background-color: #ffc91e;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 30px;

  h2 {
    font-size: 24px;
    text-transform: uppercase;
    @media ${device.sm} {
      font-size: 20px;
    }
  }
`;

const ServicesItem = styled.li`
  text-transform: uppercase;
  margin-bottom: 30px;
  margin-left: 20px;
  @media ${device.md} {
    ul {
      transition: all 0.4s;
      position: relative;
    }
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 10px;
    @media ${device.md} {
      font-size: 18px;
    }

    @media ${device.sm} {
      font-size: 16px;
    }
  }
`;

const SubServicesItem = styled.li<{ $isActive: boolean }>`
  margin-left: 0;
  font-size: 14px;
  text-transform: none;
  padding-left: 20px;
  padding-right: 65px;
  margin-bottom: 10px;
  cursor: pointer;
  border-left: ${({ $isActive }) =>
    $isActive ? '3px solid #ffc91e' : '3px solid transparent'};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'unset')};

  &:last-of-type {
    margin-bottom: 0;
  }
  @media ${device.sm} {
    font-size: 12px;
  }
`;

const ServicesText = styled.div`
  margin-bottom: 40px;
  @media ${device.md} {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
    @media ${device.md} {
      margin-bottom: 18px;
    }
  }

  p {
    margin-bottom: 40px;
    line-height: 25px;
    @media ${device.md} {
      font-size: 14px;
      line-height: 20px;
    }

    @media ${device.sm} {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

const ServicesMainImage = styled.div`
  width: 100%;
  height: 440px;
  margin-bottom: 10px;
  @media ${device.md} {
    height: 300px;
  }

  @media ${device.sm} {
    height: 200px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ServicesImagesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  @media ${device.md} {
    column-gap: 4px;
  }
`;

const ServicesImagesItem = styled.li`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SubservicesList = styled.ul<{ $isSubserviceActive: boolean }>`
  @media ${device.md} {
    opacity: ${({ $isSubserviceActive }) => ($isSubserviceActive ? 1 : 0)};
    z-index: ${({ $isSubserviceActive }) => ($isSubserviceActive ? 3 : '-3')};
    top: ${({ $isSubserviceActive }) => ($isSubserviceActive ? 0 : '-40px')};
    overflow: ${({ $isSubserviceActive }) =>
      $isSubserviceActive ? 'unset' : 'hidden'};
    height: ${({ $isSubserviceActive }) =>
      $isSubserviceActive ? 'unset' : '0'};
  }
`;

const ServicesComponent = () => {
  const [activeService, setActiveService] = useState<Service>(
    fossilServices[0]
  );
  const [activeSubService, setActiveSubService] = useState<SubService>(
    fossilServices[0]?.service?.subServices[0]
  );

  const toggleActiveService = (service: Service) => {
    setActiveService(service);
    setActiveSubService(service.service.subServices[0]);
  };

  const toggleActiveSubService = (subService: SubService) => {
    setActiveSubService(subService);
  };

  const servicesList = fossilServices.map((serviceItem: Service, index) => (
    <ServicesItem key={index} onClick={() => toggleActiveService(serviceItem)}>
      <h3>{serviceItem.service.title}</h3>
      <SubservicesList
        $isSubserviceActive={
          serviceItem.service.title === activeService.service.title
        }
      >
        {serviceItem.service.subServices.map((subService, subServiceIndex) => (
          <SubServicesItem
            key={subServiceIndex}
            onClick={(e) => {
              e.stopPropagation();
              toggleActiveSubService(subService);
            }}
            $isActive={subService === activeSubService}
          >
            {subService.title}
          </SubServicesItem>
        ))}
      </SubservicesList>
    </ServicesItem>
  ));

  const servicesImages = activeSubService.images.slice(1).map((item, index) => (
    <ServicesImagesItem key={index}>
      <Image src={item} alt="services" width={245} height={142} />
    </ServicesImagesItem>
  ));

  return (
    <ServicesWrapper>
      <ServicesContainer>
        <ServicesMenu>
          <ServicesHeading>
            <h2>Fossil Services</h2>
          </ServicesHeading>
          <ul>{servicesList}</ul>
        </ServicesMenu>
        <ServicesContent>
          <ServicesText>
            <h3>{activeSubService.title}</h3>
            {activeSubService.desc.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
            <Button text="Service Price Button" />
          </ServicesText>
          <div>
            <ServicesMainImage>
              <Image
                src={activeSubService.images[0]}
                alt="serviceMain"
                width={760}
                height={440}
              />
            </ServicesMainImage>
            <ServicesImagesList>{servicesImages}</ServicesImagesList>
          </div>
        </ServicesContent>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default ServicesComponent;
