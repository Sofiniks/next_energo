import { JSX } from 'react';

export interface MainBannerData {
  title: string;
  subtitle: string;
  icon: JSX.Element;
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
