'use client';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import ContainerLayout from '../layout/ContainerLayout';
import { TabletContainer } from '@/theme/breakpoints';
import { DesktopContainer } from '@/theme/breakpoints';
import { device } from '@/theme/breakpoints';
import { StatisticsBannerData } from '@/types/dataTypes';
import statisticsData from '@/data/statisticsData.json';

const BannerWrapper = styled.div`
  background-color: #282d33;
  margin-bottom: 80px;
  padding: 20px 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;

  @media ${device.md} {
    margin-bottom: 40px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media ${device.md} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const StyledItem = styled.li`
  @media ${device.md} {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: 54px;
    color: #ffc91e;
    margin-bottom: 5px;

    @media ${device.md} {
      font-size: 36px;
    }
  }

  h4 {
    font-size: 20px;

    @media ${device.md} {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;

    @media ${device.md} {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }
`;

export default function StatisticBanner() {
  const t = useTranslations('Statistics');
  return (
    <BannerWrapper>
      <ContainerLayout>
        <StyledList>
          {statisticsData.map((item: StatisticsBannerData) => {
            return (
              <StyledItem key={item.title}>
                <DesktopContainer>
                  <h3>{item.number}</h3>
                </DesktopContainer>
                <h4>{t(`${item.title}`)}</h4>
                <p>{t(`${item.text}`)}</p>
                <TabletContainer>
                  <h3>{item.number}</h3>
                </TabletContainer>
              </StyledItem>
            );
          })}
        </StyledList>
      </ContainerLayout>
    </BannerWrapper>
  );
}
