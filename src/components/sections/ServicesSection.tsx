'use client';
import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { scroller, Element, Link } from 'react-scroll';
import { useTranslations } from 'next-intl';
import ContainerLayout from '../layout/ContainerLayout';
import Button from '../buttons/Button';
import { device } from '@/theme/breakpoints';
import { ServiceData, SubServiceData } from '@/types/dataTypes';

interface ServicesSectionProps {
  translationTitle: string;
  servicesData: ServiceData[];
}

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
  padding-bottom: 20px;
  @media ${device.md} {
    margin-right: 0;
    min-height: 450px;
    margin-bottom: 20px;
  }
`;

const ServicesContent = styled.div`
  min-width: 70%;
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
  margin-bottom: 12px;
  cursor: pointer;
  transition: ease-in 0.3s;
  border-left: ${({ $isActive }) =>
    $isActive ? '3px solid #ffc91e' : '3px solid transparent'};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'unset')};
  &:hover {
    border-left: 3px solid #ffc91e;
    font-weight: bold;
  }

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
    margin-bottom: 30px;
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
  row-gap: 10px;
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

const SubservicesList = styled.ul<{
  $isSubserviceActive: boolean;
  $isNoTitle: boolean;
}>`
  @media ${device.md} {
    opacity: ${({ $isSubserviceActive, $isNoTitle }) =>
      $isSubserviceActive || $isNoTitle ? 1 : 0};
    z-index: ${({ $isSubserviceActive, $isNoTitle }) =>
      $isSubserviceActive || $isNoTitle ? 3 : '-3'};
    top: ${({ $isSubserviceActive, $isNoTitle }) =>
      $isSubserviceActive || $isNoTitle ? 0 : '-40px'};
    overflow: ${({ $isSubserviceActive, $isNoTitle }) =>
      $isSubserviceActive || $isNoTitle ? 'unset' : 'hidden'};
    height: ${({ $isSubserviceActive, $isNoTitle }) =>
      $isSubserviceActive || $isNoTitle ? 'unset' : '0'};
  }
`;

const ContentList = styled.ul`
  margin-top: 20px;
  margin-bottom: 30px;
  li {
    margin-bottom: 10px;
  }
`;

const ServicesComponent = ({
  translationTitle,
  servicesData,
}: ServicesSectionProps) => {
  const params = useSearchParams();
  const servicesParam = params.get('services');
  const router = useRouter();
  const t = useTranslations(translationTitle);

  useEffect(() => {
    if (servicesParam === 'true') {
      scroller.scrollTo('servicesSection', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -100, 
      });
    }
  }, [servicesParam]);

  const scrollToContactForm = (serviceName: string) => {
    router.push(`?serviceName=${t(`${serviceName}`)}`);
  };
  
  const [activeService, setActiveService] = useState<ServiceData>(
    servicesData[0]
  );
  const [activeSubService, setActiveSubService] = useState<SubServiceData>(
    servicesData[0]?.service?.subServices[0]
  );

  const toggleActiveService = (service: ServiceData) => {
    setActiveService(service);
    setActiveSubService(service.service.subServices[0]);
  };

  const toggleActiveSubService = (subService: SubServiceData) => {
    setActiveSubService(subService);
  };

  const servicesList = servicesData.map((serviceItem: ServiceData, index) => (
    <ServicesItem key={index} onClick={() => toggleActiveService(serviceItem)}>
      {serviceItem.service.title && (
        <h3>{t(`${serviceItem.service.title}`)}</h3>
      )}
      <SubservicesList
        $isSubserviceActive={
          serviceItem.service.title === activeService.service.title
        }
        $isNoTitle={serviceItem.service.title === ''}
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
            {t(`${subService.title}`)}
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
    <Element name="servicesSection" className="element">
      <ServicesWrapper id="services">
        <ServicesContainer>
          <ServicesMenu>
            <ServicesHeading>
              <h2>{t('sectionTitle')}</h2>
            </ServicesHeading>
            <ul>{servicesList}</ul>
          </ServicesMenu>
          <ServicesContent>
            <ServicesText>
              <h3>{t(`${activeSubService.title}`)}</h3>
              {activeSubService?.desc?.map((desc, idx) => (
                <p key={idx}>{t(`${desc}`)}</p>
              ))}
              {activeSubService?.list && (
                <ContentList>
                  {activeSubService?.list?.map((item, index) => (
                    <li key={index}>{t(`${item}`)}</li>
                  ))}
                </ContentList>
              )}
              <Link
                to="contactUs"
                spy={true}
                smooth={true}
                duration={1500}
                offset={-100}
                onClick={() => scrollToContactForm(activeSubService.title)}
              >
                <Button text={t('button')} />
              </Link>
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
    </Element>
  );
};

export default ServicesComponent;
