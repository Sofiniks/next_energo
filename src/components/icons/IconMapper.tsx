import BuildingIcon1 from './BuildingIcon1';
import BuildingIcon2 from './BuildingIcon2';
import BuildingIcon3 from './BuildingIcon3';
import BuildingIcon4 from './BuildingIcon4';
import { Burger } from './Burger';
import { Contact } from './Contact';
import { Cross } from './Cross';
import en from './en';
import { Facebook } from './Facebook';
import { Instagram } from './Instagram';
import { lv } from './lv';
import { Letter } from './Letter';
import { LetterBlack } from './LetterBlack';
import { Location } from './Location';
import { LocationBlack } from './LocationBlack';
import { Phone } from './Phone';
import { PhoneBlack } from './PhoneBlack';
import { ru } from './ru';
import { Tick } from './Tick';
import { TickGreen } from './TickGreen';
import { Whatsapp } from './Whatsapp';

type IconComponentMap = {
  [key: string]: React.ComponentType;
};

const componentMap: IconComponentMap = {
  BuildingIcon1,
  BuildingIcon2,
  BuildingIcon3,
  BuildingIcon4,
  Burger,
  Contact,
  Cross,
  en,
  Facebook,
  Instagram,
  lv,
  Letter,
  LetterBlack,
  Location,
  LocationBlack,
  Phone,
  PhoneBlack,
  ru,
  Tick,
  TickGreen,
  Whatsapp,
};

import React from 'react';

function getIconComponent(iconKey: string): React.ReactElement | null {
  const IconComponent = componentMap[iconKey];
  if (IconComponent) {
    return <IconComponent />;
  }
  return null;
}

export default getIconComponent;
