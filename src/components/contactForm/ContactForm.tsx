'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';
import { LocationBlack } from '../icons/LocationBlack';
import { LetterBlack } from '../icons/LetterBlack';
import { PhoneBlack } from '../icons/PhoneBlack';
import { Whatsapp } from '../icons/Whatsapp';
import { Facebook } from '../icons/Facebook';
import { Instagram } from '../icons/Instagram';
import ContainerLayout from '../layout/ContainerLayout';
import { SectionHeading } from '../typography/typography';
import Button from '../buttons/Button';
import { DesktopContainer, TabletContainer, device } from '@/theme/breakpoints';
import MessageModal from '../modals/ContactFormModal';
import contacts from '@/data/contacts.json';

const ContactWrapper = styled.div`
  margin-bottom: 80px;
  position: relative;
  @media ${device.sm} {
    margin-bottom: 20px;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FormContainer = styled.div`
  position: relative;
  width: calc(100% - 250px);
  @media ${device.md} {
    width: 100%;
    background-color: #282d33;
  }
`;

const Form = styled.form`
  background-color: #282d33;
  color: #fff;
  padding: 60px 0 60px 240px;
  display: flex;
  flex-direction: column;

  @media ${device.md} {
    padding: 40px 10px;
  }

  h4 {
    font-weight: 300;
    white-space: pre-wrap;
    &:last-of-type {
      margin-bottom: 20px;
    }
    @media ${device.md} {
      font-size: 14px;
    }
  }
  input,
  textarea {
    max-width: 400px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    padding: 7px;
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
  input {
    margin-bottom: 30px;
  }
  textarea {
    margin-bottom: 50px;
  }
`;

const PositionAbsoluteBlock = styled.div`
  position: absolute;
  top: 40px;
  left: -100px;
`;

const YellowBlock = styled.div`
  background-color: #ffc91e;
  width: 320px;
  height: 375px;
  padding: 40px 40px 0 30px;
  h5 {
    font-weight: bold;
    text-transform: uppercase;
    color: #282d33;
    margin-bottom: 20px;
    font-size: 18px;
  }
  @media ${device.md} {
    width: 100%;
    height: 310px;
  }
`;

const ContactsList = styled.ul`
  margin-bottom: 40px;
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 30px;
    &:last-of-type {
      margin-bottom: 0;
    }
    svg {
      min-width: 24px;
    }
    p {
      color: #282d33;
    }
  }
`;

const SocialsList = styled.ul`
  display: flex;
  li {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-right: 12px;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const SvgWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

const ContactsBlock = ({ title }: { title: string }) => {
  return (
    <>
      <h5>{title}</h5>
      <ContactsList>
        <li>
          <SvgWrapper>
            <LocationBlack />
          </SvgWrapper>
          <p>{contacts.address}</p>
        </li>
        <li>
          <SvgWrapper>
            <LetterBlack />
          </SvgWrapper>
          <p>{contacts.email}</p>
        </li>
        <li>
          <SvgWrapper>
            <PhoneBlack />
          </SvgWrapper>
          <p>
            <a href={`tel:${contacts.phoneNumber}`}>{contacts.phoneNumber}</a>
          </p>
        </li>
      </ContactsList>
      <SocialsList>
        <li>
          <a href={'/'}>
            <Whatsapp />
          </a>
        </li>
        <li>
          <a href={'/'}>
            <Facebook />
          </a>
        </li>
        <li>
          <a href={'/'}>
            <Instagram />
          </a>
        </li>
      </SocialsList>
    </>
  );
};

const FormElement = ({ setModalOpen }: { setModalOpen: () => void }) => {
  const t = useTranslations('ContactUs');
  const handleSubmit = () => {
    setModalOpen();
  };

  const GOOGLE_FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSce5TU4kF7h6CudZUIUh6W0HYVtyTAb0FMWeL07TD9Nb5PSZw/formResponse';

  return (
    <>
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ visibility: 'hidden', height: '14px' }}
      ></iframe>
      <Form
        action={GOOGLE_FORM_URL}
        method="post"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <h4>{t('form.heading1')}</h4>
        <h4>{t('form.heading2')}</h4>
        <input
          type="text"
          placeholder={t('form.placeholders.name')}
          name="entry.2005620554"
          required
        />
        <input
          type="text"
          placeholder={t('form.placeholders.email')}
          name="entry.1045781291"
          required
        />
        <textarea
          rows={1}
          placeholder={t('form.placeholders.message')}
          name="entry.839337160"
          required
        />
        <ButtonWrapper>
          <Button text={t('form.button')} onClick={setModalOpen} />
        </ButtonWrapper>
      </Form>
    </>
  );
};

const ContactForm = () => {
  const t = useTranslations('ContactUs');
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Element name="contactUs" className="element">
      <ContactWrapper>
        <DesktopContainer>
          <ContainerLayout>
            <SectionHeading text={t('sectionTitle')} />
            <SectionWrapper>
              <FormContainer>
                <FormElement setModalOpen={() => setIsModalOpen(true)} />
                <PositionAbsoluteBlock>
                  <YellowBlock>
                    <ContactsBlock title={t('contacts')} />
                  </YellowBlock>
                </PositionAbsoluteBlock>
              </FormContainer>
            </SectionWrapper>
          </ContainerLayout>
        </DesktopContainer>
        <TabletContainer>
          <YellowBlock>
            <TabletContainer>
              <ContactsBlock title={t('contacts')} />
            </TabletContainer>
          </YellowBlock>
          <FormContainer>
            <ContainerLayout>
              <FormElement setModalOpen={() => setIsModalOpen(true)} />
            </ContainerLayout>
          </FormContainer>
        </TabletContainer>
        {isModalOpen && <MessageModal onClose={() => setIsModalOpen(false)} />}
      </ContactWrapper>
    </Element>
  );
};

export default ContactForm;
