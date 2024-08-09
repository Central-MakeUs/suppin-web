import { Header } from '@/components/common/header';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/tabs';
import { FloatingButton } from '@/components/home/floating-button';
import { NoResult } from '@/components/home/no-result';
import EventList from '@/components/home/event-list';
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '@/services/apis/user.service';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomePageWrapper } from './home-page.styles';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>('progress');

  const { data: progressEvents, isPending: isPendingProgress } = useQuery({
    queryKey: ['events', 'progress'],
    queryFn: () => getEvents('PROCESSING'),
  });

  const { data: completeEvents, isPending: isPendingComplete } = useQuery({
    queryKey: ['events', 'complete'],
    queryFn: () => getEvents('COMPLETE'),
  });

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
          {isPendingProgress ? (
            <div>로딩 중...</div>
          ) : progressEvents.length > 0 ? (
            <EventList events={progressEvents} />
          ) : (
            <NoResult />
          )}
        </TabsContent>
        <TabsContent value="complete">
          {isPendingComplete ? (
            <div>로딩 중...</div>
          ) : completeEvents.length > 0 ? (
            <EventList events={completeEvents} />
          ) : (
            <NoResult />
          )}
        </TabsContent>
      </Tabs>
      <FloatingButton />
    </HomePageWrapper>
  );
};

export default HomePage;
