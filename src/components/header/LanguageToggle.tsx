import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { LanguagesToggleData } from '@/types/dataTypes';
import { device } from '@/theme/breakpoints';
import getIconComponent from '../icons/IconMapper';

const languagesList: LanguagesToggleData[] = [
  { key: 'lv', iconKey: 'Latvian', title: 'Latviski' },
  { key: 'en', iconKey: 'English', title: 'English' },
  { key: 'ru', iconKey: 'Russian', title: 'Русский' },
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
    transition: all 0.3s;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #fff;
    }
  }
`;

const LinkContent = styled.div`
  display: flex;
  svg {
    margin-right: 10px;
    width: 29px;
    height: 20px;
  }
`;

function LanguageToggle() {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const locale = useLocale();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const [isOpen, setIsOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState('lv');
  useEffect(() => {
    const newLocale = languagesList.find(
      (item: LanguagesToggleData) => item.key === locale
    )?.iconKey;
    setActiveIcon(newLocale || 'lv');
  }, [locale]);

  const toggleLanguageOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LanguageToggleWrapper>
      <LanguageToggleBox onClick={toggleLanguageOptions}>
        {getIconComponent(activeIcon)}
      </LanguageToggleBox>
      <LanguageOptions $isOpen={isOpen}>
        <ul>
          {languagesList.map((item) => (
            <li key={item.key}>
              <Link locale={item.key} href={`/${item.key}/${pathname}`}>
                <LinkContent>
                  {getIconComponent(item.iconKey)}
                  <p>{item.title}</p>
                </LinkContent>
              </Link>
            </li>
          ))}
        </ul>
      </LanguageOptions>
    </LanguageToggleWrapper>
  );
}

export default LanguageToggle;
