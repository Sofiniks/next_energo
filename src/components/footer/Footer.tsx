'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Location } from '../icons/Location';
import { Letter } from '../icons/Letter';
import { Phone } from '../icons/Phone';
import ContainerLayout from '../layout/ContainerLayout';
import { useMemo } from 'react';

const FooterWrapper = styled.footer`
  background-color: #282d33;
  padding: 20px 40px;
  color: white;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  transition: all 0.2s;

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

const CredentialsLink = styled.div`
  span {
    color: #ffc91e;
    font-weight: 600;
  }
`;

export default function Footer() {
  const contactInfoList = useMemo(
    () => (
      <div>
        <ul>
          <li>
            <SvgWrapper>
              <Location />
            </SvgWrapper>
            <p>Ludzas iela 2, Latgales priekšpilsēta, Rīga, LV-1003</p>
          </li>
          <li>
            <SvgWrapper>
              <Letter />
            </SvgWrapper>
            <p>energoefektivitate@gmail.com</p>
          </li>
          <li>
            <SvgWrapper>
              <Phone />
            </SvgWrapper>
            <p>
              <a href={`tel:${'+371-2777-3555'}`}>+371-2777-3555</a>
            </p>
          </li>
        </ul>
      </div>
    ),
    []
  );

  return (
    <FooterWrapper>
      <ContainerLayout>
        <FooterTop>
          <LogoWrapper>
            <Link href="/">
              <Image
                src="/images/energoLogo.png"
                alt="logo"
                width={100}
                height={72}
              />
            </Link>
          </LogoWrapper>
          <ContactInfo>{contactInfoList}</ContactInfo>
        </FooterTop>
        <FooterBottom>
          <CredentialsLink>
            Majas lapu izstrade
            <span>
              <a href="https://webbynavia.no"> Webbynavia</a>
            </span>
          </CredentialsLink>
        </FooterBottom>
      </ContainerLayout>
    </FooterWrapper>
  );
}
