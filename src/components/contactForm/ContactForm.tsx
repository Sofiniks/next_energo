'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useForm, ValidationError } from '@formspree/react';
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
          <a href={contacts.whatsapp}>
            <Whatsapp />
          </a>
        </li>
        <li>
          <a href={contacts.facebook}>
            <Facebook />
          </a>
        </li>
        <li>
          <a href={contacts.instagram}>
            <Instagram />
          </a>
        </li>
      </SocialsList>
    </>
  );
};

const FormElement = () => {
  const t = useTranslations('ContactUs');
  const [state, handleSubmit] = useForm('xrgwrgvr');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useSearchParams();
  const serviceNameParam = params.get('serviceName');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  useEffect(() => {
    if (serviceNameParam) {
      setFormData({
        ...formData,
        message: t('form.textAreaMessage', { serviceName: serviceNameParam }),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceNameParam]);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit} id="form">
        <input
          id="name"
          type="name"
          name="name"
          placeholder={t('form.placeholders.name')}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          id="email"
          type="email"
          name="email"
          placeholder={t('form.placeholders.email')}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder={t('form.placeholders.phone')}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder={t('form.placeholders.message')}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ButtonWrapper>
          <Button
            type="submit"
            disabled={state.submitting}
            text={t('form.button')}
          />
        </ButtonWrapper>
      </Form>
      {state.succeeded && (
        <MessageModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </>
  );
};

const ContactForm = () => {
  const t = useTranslations('ContactUs');
  return (
    <Element name="contactUs" className="element">
      <ContactWrapper>
        <DesktopContainer>
          <ContainerLayout>
            <SectionHeading text={t('sectionTitle')} />
            <SectionWrapper>
              <FormContainer>
                <FormElement />
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
              <FormElement />
            </ContainerLayout>
          </FormContainer>
        </TabletContainer>
      </ContactWrapper>
    </Element>
  );
};

export default ContactForm;
