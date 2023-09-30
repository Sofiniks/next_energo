import { JSX } from 'react';

export interface MainBannerData {
  title: string;
  subtitle: string;
  iconKey: string;
}

export interface StatisticsBannerData {
  number: string;
  title: string;
  text: string;
}

export interface WhyUsSectionData {
  title: string;
  desc: string;
  img: string;
}

export interface SubServiceData {
  title: string;
  desc: string[];
  images: string[];
}
export interface ServiceData {
  service: {
    title: string;
    subServices: SubServiceData[];
  };
}

export interface LanguagesToggleData {
  key: string;
  title: string;
  iconKey: string;
}
