'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { device } from '@/theme/breakpoints';
import ContainerLayout from '../layout/ContainerLayout';
import { TabletContainer, DesktopContainer } from '@/theme/breakpoints';
import LanguageToggle  from './LanguageToggle';
import  MobileBurgerMenu  from './MobileBurgerMenu';
import { Contact } from '../icons/Contact';
import { Burger } from '../icons/Burger';
import contacts from '@/data/contacts.json';


const HeaderWrapper = styled.header`
  background-color: #fff;
  height: 80px;
  padding: 5px 40px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  @media ${device.sm} {
    height: 60px;
    padding: 0 20px;
  }
`;
const HeaderDesktopContainer = styled(DesktopContainer)`
  display: flex;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  width: 40%;
  display: flex;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s;
  }
  @media ${device.md} {
    margin-right: 0;
  }
`;
const Navbar = styled.nav`
  display: flex;
  align-items: flex-end;
`;
const NavList = styled.ul`
  display: flex;
  li {
    margin-right: 40px;
    padding-bottom: 24px;
    font-weight: 600;
    font-size: 18px;
    white-space: nowrap;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.05);
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const Info = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 45px;
  svg {
    margin-right: 15px;
  }
  a {
    font-weight: 600;
  }
`;
const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export default function Header() {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderWrapper>
      <ContainerLayout>
        <HeaderDesktopContainer>
          <HeaderLeft>
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
            <Navbar>
              <NavList>
                <li>
                  <Link href="/">{t('home')}</Link>
                </li>
                <li>
                  <Link href="/services">{t('services')}</Link>
                </li>
              </NavList>
            </Navbar>
          </HeaderLeft>
          <HeaderRight>
            <Info>
              <Contact />
              <div>
                <p>{t('contactUs')}</p>
                <a href={`tel:${contacts.phoneNumber}`}>{contacts.phoneNumber}</a>
              </div>
            </Info>
            <LanguageToggle />
          </HeaderRight>
        </HeaderDesktopContainer>

        <TabletContainer>
          <HeaderMobile>
            <div onClick={handleToggleMenu}>
              <Burger />
            </div>
            <LogoWrapper>
              <Link href="/">
                <Image
                  src="/images/energoLogo.png"
                  alt="logo"
                  width={80}
                  height={58}
                />
              </Link>
            </LogoWrapper>
            <LanguageToggle />
          </HeaderMobile>
          <MobileBurgerMenu isOpen={isMenuOpen} onClose={handleToggleMenu} />
        </TabletContainer>
      </ContainerLayout>
    </HeaderWrapper>
  );
}
