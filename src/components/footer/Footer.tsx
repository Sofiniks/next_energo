'use client';
import styled from 'styled-components';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import ContainerLayout from '../layout/ContainerLayout';
import { device, TabletContainer } from '@/theme/breakpoints';
import { Location } from '../icons/Location';
import { Letter } from '../icons/Letter';
import { Phone } from '../icons/Phone';
import contacts from '@/data/contacts.json';

const FooterWrapper = styled.footer`
  background-color: #282d33;
  padding: 20px 40px;
  color: white;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  @media ${device.md} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
`;

const LogoWrapper = styled.div`
  transition: all 0.2s;

  @media ${device.md} {
    margin-bottom: 30px;
  }
  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 120px;
    height: auto;
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  width: 270px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    max-width: 230px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
  p {
    margin-left: 15px;
  }

  svg {
    min-width: 24px;
  }
`;

const SvgWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const MobileHeading = styled.h4`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;
const ContactInfoList = () => {
  return (
    <div>
      <ul>
        <li>
          <SvgWrapper>
            <Location />
          </SvgWrapper>
          <p>{contacts.address}</p>
        </li>
        <li>
          <SvgWrapper>
            <Letter />
          </SvgWrapper>
          <p>{contacts.email}</p>
        </li>
        <li>
          <SvgWrapper>
            <Phone />
          </SvgWrapper>
          <p>
            <a href={`tel:${contacts.phoneNumber}`}>{contacts.phoneNumber}</a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  return (
    <FooterWrapper>
      <ContainerLayout>
        <FooterTop>
          <LogoWrapper>
            <Link href={`/${locale}`}>
              <Image
                src="/images/energoLogo.png"
                alt="logo"
                width={100}
                height={72}
              />
            </Link>
          </LogoWrapper>
          <ContactInfo>
            <TabletContainer>
              <MobileHeading>{t('contacts')}</MobileHeading>
            </TabletContainer>

            <ContactInfoList />
          </ContactInfo>
        </FooterTop>
      </ContainerLayout>
    </FooterWrapper>
  );
}
