'use client';
import styled from 'styled-components';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Cross } from '../icons/Cross';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const MenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  left: 0;
  width: 100%;
  background-color: #282d33;
  z-index: 11;
  transition: top 0.3s ease-in-out;
`;

const MenuHeader = styled.div`
  padding: 20px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 20px;
  color: #fff;
  font-weight: 600;
`;

const MobileBurgerMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const t = useTranslations('Header');
  const locale = useLocale();
  const navLinks = [
    { title: 'home', href: `/${locale}` },
    {
      title: 'mobileServicesFossil',
      href: `/${locale}/fossil-energy-services`,
    },
    {
      title: 'mobileServicesElectricity',
      href: `/${locale}/electricity-services`,
    },
  ];

  return (
    <>
      {isOpen && <Overlay onClick={onClose} />}
      <MenuContainer $isOpen={isOpen}>
        <MenuHeader>
          <div onClick={onClose}>
            <Cross />
          </div>
        </MenuHeader>
        <MenuList>
          {navLinks.map((link) => (
            <MenuItem key={link.title} onClick={onClose}>
              <Link href={link.href}>{t(`${link.title}`)}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </MenuContainer>
    </>
  );
};

export default MobileBurgerMenu;
