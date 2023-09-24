'use client';
import styled from 'styled-components';
import ContainerLayout from '../layout/ContainerLayout';

const data = [
  {
    number: '4000+',
    title: 'numberTitle1',
    text: 'numberText1',
  },
  {
    number: '10+',
    title: 'numberTitle2',
    text: 'numberText2',
  },
  {
    number: '3.5m',
    title: 'numberTitle3',
    text: 'numberText3',
  },
];

const BannerWrapper = styled.div`
  background-color: #282d33;
  margin-bottom: 80px;
  padding: 20px 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const StyledItem = styled.li`
  h3 {
    font-size: 54px;
    color: #ffc91e;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }
`;

export default function StatisticBanner() {
  return (
    <BannerWrapper>
      <ContainerLayout>
        <StyledList>
          {data.map((item) => {
            return (
              <StyledItem key={item.title}>
                <h3>{item.number}</h3>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </StyledItem>
            );
          })}
        </StyledList>
      </ContainerLayout>
    </BannerWrapper>
  );
}
