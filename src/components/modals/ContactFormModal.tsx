'use client';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import Button from '../buttons/Button';
import { device } from '@/theme/breakpoints';
import { TickGreen } from '../icons/TickGreen';
import { Cross } from '../icons/Cross';

const ModalWrapper = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #1d2025;
  box-shadow: 0 4px 10px rgba(black, 0.5);
  position: fixed;
  padding: 25px 80px 40px 80px;
  justify-content: space-between;
  text-align: center;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  @media ${device.sm} {
    padding: 25px 60px 40px 60px;
    width: 300px;
    height: 500px;
  }
  h3 {
    font-size: 24px;
  }
`;
const CrossIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;
const TickIconWrapper = styled.div``;
const StyledText = styled.p`
  font-size: 14px;
  line-height: 20px;
`;
const Overlay = styled.div<{ $isHidden: boolean }>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'unset')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
`;

const MessageModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (_: boolean) => void;
}) => {
  const t = useTranslations('ContactUs');
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <Overlay $isHidden={!isOpen} onClick={handleModalClose}>
      <ModalWrapper>
        <CrossIconWrapper onClick={handleModalClose}>
          <Cross />
        </CrossIconWrapper>
        <h3>{t('form.sendConfirmation')}</h3>
        <TickIconWrapper>
          <TickGreen />
        </TickIconWrapper>
        <StyledText>{t('form.messageReceived')}</StyledText>
        <Button text="OK" onClick={handleModalClose} />
      </ModalWrapper>
    </Overlay>
  );
};

export default MessageModal;
