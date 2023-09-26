import React, { useState } from 'react';
import styled from 'styled-components';
import { Russian } from '../icons/Russian';
import { Latvian } from '../icons/Latvian';
import English from '../icons/English';
import { device } from '@/theme/breakpoints';

const languagesList = [
  { key: 'ru', img: <Russian />, title: 'Russian' },
  { key: 'lv', img: <Latvian />, title: 'Latvian' },
  { key: 'en', img: <English />, title: 'English' },
];

const LanguageToggleWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const LanguageToggleBox = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);

  img {
    width: 30px;
    height: 20px;
    border-radius: 4px;
  }
  @media ${device.sm} {
    width: 35px;
    height: 35px;

    img {
      width: 23px;
      height: 15px;
    }
  }
`;

const LanguageOptions = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: 55px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s,
    visibility 0.3s;

  ul {
    width: 130px;
    background-color: #e1e1e1;
    border-radius: 3px;
    padding: 15px 4px;
  }

  li {
    margin-bottom: 10px;
    height: 25px;
    border-radius: 3px;
    transition: all .3s;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #fff;
    }
    svg {
        margin-right: 10px;
        width: 29px;
        height: 20px;
    }
  }
`;

function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguageOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = () => {
    // Implement language change logic here
    // You can dispatch an action to update the language in your Redux store
    // or use any other method based on your project setup
  };

  return (
    <LanguageToggleWrapper>
      <LanguageToggleBox onClick={toggleLanguageOptions}>
        <English />
      </LanguageToggleBox>
      <LanguageOptions $isOpen={isOpen}>
        <ul>
          {languagesList.map((item) => (
            <li key={item.key} onClick={() => handleChangeLanguage()}>
              {item.img}
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </LanguageOptions>
    </LanguageToggleWrapper>
  );
}

export default LanguageToggle;
