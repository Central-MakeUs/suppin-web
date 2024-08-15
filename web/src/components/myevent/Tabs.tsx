import { DoneEventCard, ProcessingEventCard } from '@/components/myevent';
import { COLORS } from '@/theme';
import { useState } from 'react';
import styled from 'styled-components';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('progress');

  const renderContent = () => {
    if (activeTab === 'progress') {
      return <ProcessingEventCard />;
    } else if (activeTab === 'completed') {
      return <DoneEventCard />;
    }
  };

  return (
    <Container>
      <TabContainer>
        <Tab
          $isActive={activeTab === 'progress'}
          onClick={() => setActiveTab('progress')}
        >
          진행 중
        </Tab>
        <Tab
          $isActive={activeTab === 'completed'}
          onClick={() => setActiveTab('completed')}
        >
          진행 완료
        </Tab>
      </TabContainer>
      <Indicator $activeTab={activeTab} />
      {renderContent()}
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

// Transient Props 사용 ($ 붙히는 거)
// $activeTab으로 prop 이름을 변경하여 스타일을 적용.
// 이 방법은 styled - components가 자동으로 필터링하여 해당 prop을 DOM 요소로 전달하지 않는다.
const Tab = styled.button<{ $isActive: boolean }>`
  width: 50%;
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => (props.$isActive ? COLORS.Main : COLORS.Gray3)};
  font-weight: ${props => (props.$isActive ? 'bold' : 'normal')};
  border-bottom: ${props =>
    props.$isActive ? '2px solid #215BFB' : `1px solid ${COLORS.Gray3}`};
  &:hover {
    color: ${COLORS.Main};
  }
`;

const Indicator = styled.div<{ $activeTab: string }>`
  height: 2px;
  transition: transform 0.3s ease;
  transform: ${props =>
    props.$activeTab === 'progress' ? 'translateX(0%)' : 'translateX(100%)'};
`;
