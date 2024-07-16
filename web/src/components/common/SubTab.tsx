import { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';

interface TabProps {
  active: boolean;
}

export const SubTab = () => {
  const [activeTab, setActiveTab] = useState('survey');

  return (
    <Container>
      <TabContainer>
        <Tab
          active={activeTab === 'survey'}
          onClick={() => setActiveTab('survey')}
        >
          설문 결과
        </Tab>
        <Tab
          active={activeTab === 'selection'}
          onClick={() => setActiveTab('selection')}
        >
          당첨자 선정
        </Tab>
      </TabContainer>
      <Indicator activeTab={activeTab} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Tab = styled.button<TabProps>`
  width: 50%;
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => (props.active ? COLORS.Main : COLORS.Gray3)};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  border-bottom: ${props => (props.active ? '2px solid #215BFB' : 'none')};
  &:hover {
    color: ${COLORS.Main};
  }
`;

const Indicator = styled.div<{ activeTab: string }>`
  height: 2px;
  transition: transform 0.3s ease;
  transform: ${props =>
    props.activeTab === 'progress' ? 'translateX(0%)' : 'translateX(100%)'};
`;
