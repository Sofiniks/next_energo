'use client';
import React from 'react';
import styled from 'styled-components';
import { LocationBlack } from '../icons/LocationBlack';
import { LetterBlack } from '../icons/LetterBlack';
import { PhoneBlack } from '../icons/PhoneBlack';
import { Whatsapp } from '../icons/Whatsapp';
import { Facebook } from '../icons/Facebook';
import { Instagram } from '../icons/Instagram';
import ContainerLayout from '../layout/ContainerLayout';
import { SectionHeading } from '../typography/typography';
import Button from '../buttons/Button';
import { device } from '@/theme/breakpoints';

const ContactWrapper = styled.div`
  margin-bottom: 80px;
  position: relative;
  @media ${device.sm} {
    margin-bottom: 20px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Form = styled.form`
  background-color: #282d33;
  width: calc(100% - 250px);
  color: #fff;
  padding: 60px 280px 60px 280px;
  position: relative;
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: 300;
    &:last-of-type {
      margin-bottom: 20px;
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
  }
  input {
    margin-bottom: 30px;
  }
  textarea {
    margin-bottom: 50px;
  }

  ::placeholder {
    color: white;
    font-family: 'Montserrat';
  }
`;

const YellowBlock = styled.div`
  position: absolute;
  background-color: #ffc91e;
  width: 320px;
  height: 375px;
  top: 40px;
  left: -100px;
  padding: 40px 40px 0 30px;
  h5 {
    font-weight: bold;
    text-transform: uppercase;
    color: #282d33;
    margin-bottom: 20px;
    font-size: 18px;
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
      margin-right: 20px;
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

const ContactForm = () => {
  return (
    <ContactWrapper>
      <ContainerLayout>
        <SectionHeading text="Sazinaties ar mums" />
        <FormContainer>
          <Form method="post" target="hidden_iframe">
            <h4>Juties brivi sazinaties ar mums jebkura laika</h4>
            <h4>Mes ar jums sazinasimies, cik driz vien varesim</h4>
            <input
              type="text"
              placeholder="Vards"
              name="entry.2005620554"
              required
            />
            <input
              type="text"
              placeholder="E-pasts vai talruna numurs"
              name="entry.1045781291"
              required
            />
            <textarea
              rows={1}
              placeholder="Zinojums"
              name="entry.839337160"
              required
            />
            <ButtonWrapper>
              <Button text="nosutit" />
            </ButtonWrapper>
            <YellowBlock>
              <h5>Kontakti</h5>
              <ContactsList>
                <li>
                  <LocationBlack />
                  <p>Ludzas iela 2</p>
                </li>
                <li>
                  <LetterBlack />
                  <p>energoefektivitate@gmail.com</p>
                </li>
                <li>
                  <PhoneBlack />
                  <p>
                    <a href={`tel:+371-2777-3555`}>+371-2777-3555</a>
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
            </YellowBlock>
          </Form>
        </FormContainer>
      </ContainerLayout>
    </ContactWrapper>
  );
};

export default ContactForm;
