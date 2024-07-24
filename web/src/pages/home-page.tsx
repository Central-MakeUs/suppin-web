import { Header } from '@/components/common/header';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/tabs';
import { FloatingButton } from '@/components/home/floating-button';
import { NoResult } from '@/components/home/no-result';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomePageWrapper } from './home-page.styles';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>('progress');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && (type === 'progress' || type === 'complete')) {
      setActiveTab(type);
    } else {
      setSearchParams({ type: 'progress' });
    }
  }, [searchParams, setSearchParams]);

  const handleTabChange = useCallback(
    (value: string) => {
      setActiveTab(value);
      setSearchParams({ type: value });
    },
    [setSearchParams]
  );

  return (
    <HomePageWrapper>
      <Header>
        <h1>내 이벤트</h1>
      </Header>
      <Tabs
        style={{ height: 'calc(100% - 6.375rem)' }}
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <TabsList>
          <TabsTrigger value="progress">진행 중</TabsTrigger>
          <TabsTrigger value="complete">진행 완료</TabsTrigger>
        </TabsList>
        <TabsContent value="progress">
          <NoResult />
        </TabsContent>
        <TabsContent value="complete">
          <NoResult />
        </TabsContent>
      </Tabs>
      <FloatingButton />
    </HomePageWrapper>
  );
};

export default HomePage;
