import { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';

interface TabProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

interface SubTabProps {
  tabs: { label: string; value: string }[];
  onTabChange: (value: string) => void;
}

export const SubTab = ({ tabs, onTabChange }: SubTabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onTabChange(value);
  };

  return (
    <Container>
      <TabContainer>
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            active={activeTab === tab.value}
            onClick={() => handleTabClick(tab.value)}
            label={tab.label}
          >
            {tab.label}
          </Tab>
        ))}
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
    props.activeTab === 'survey' ? 'translateX(0%)' : 'translateX(100%)'};
`;
