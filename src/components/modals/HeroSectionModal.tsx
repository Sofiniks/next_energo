'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Button from '../buttons/Button';
import { Cross } from '../icons/Cross';
import { device } from '@/theme/breakpoints';

const ModalWrapper = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #1d2025;
  box-shadow: 0 4px 10px rgba(black, 0.5);
  position: fixed;
  padding: 50px 80px;
  justify-content: space-between;
  text-align: center;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  color: #ffc91e;
  border-radius: 3px;
  background-color: #282d33;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 40px;
  border: 1px solid #ffc91e;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  @media ${device.sm} {
    padding: 14px 20px;
  }
`;

const CrossIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const HeroSectionModal = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <ModalWrapper>
      <CrossIconWrapper onClick={handleCloseModal}>
        <Cross />
      </CrossIconWrapper>
      <h3>{t('modal.title')}</h3>
      <StyledLink href={`/${locale}/fossil-energy-services?services=true`}>
        {t('modal.fossil')}
      </StyledLink>
      <StyledLink href={`/${locale}/electricity-services?services=true`}>
        {t('modal.electricity')}
      </StyledLink>
      <Button onClick={handleCloseModal} text={t('modal.cancel')} />
    </ModalWrapper>
  );
};

export default HeroSectionModal;
