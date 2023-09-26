'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import ContainerLayout from '../layout/ContainerLayout';
import LanguageToggle from './LanguageToggle';
import { TabletContainer } from '@/theme/breakpoints';
import { DesktopContainer } from '@/theme/breakpoints';
import { Contact } from '../icons/Contact';
import { Burger } from '../icons/Burger';
import { device } from '@/theme/breakpoints';

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
  z-index: 10;
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
const BurgerIconWrapper = styled.div``;

const list = () => {
  return (
    <NavList>
      <li>Uz sakumu</li>
      <li>Pakalpojumi</li>
    </NavList>
  );
};

export default function Header() {
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
            <Navbar>{list()}</Navbar>
          </HeaderLeft>
          <HeaderRight>
            <Info>
              <Contact />
              <div>
                <p>Sazinaties ar mums</p>
                <a href={`tel:${'+371-2777-3555'}`}>+371-2777-3555</a>
              </div>
            </Info>
            <LanguageToggle />
          </HeaderRight>
        </HeaderDesktopContainer>

        <TabletContainer>
          <HeaderMobile>
            <BurgerIconWrapper>
              <Burger />
            </BurgerIconWrapper>
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
            <LanguageToggle />
          </HeaderMobile>
        </TabletContainer>
      </ContainerLayout>
    </HeaderWrapper>
  );
}
