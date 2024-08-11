import { Header } from '@/components/common/header';
import { BarLoader } from '@/components/common/loader';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/tabs';
import EventList from '@/components/home/event-list';
import { FloatingButton } from '@/components/home/floating-button';
import { NoResult } from '@/components/home/no-result';
import { useGetEvent } from '@/services/queries/event.queries';
import type { EventStatus, EventType } from '@/types/event';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomePageWrapper } from './home-page.styles';

const p = 'PROCESSING';
const d = 'DONE';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type');

  const { eventsData } = useGetEvent();

  const [activeTab, setActiveTab] = useState<EventStatus>(p);
  const [events, setEvents] = useState<EventType[] | null>(null);

  useEffect(() => {
    if (type && (type === p || type === d)) {
      setActiveTab(type);
    } else {
      setSearchParams({ type: p });
    }
  }, []);

  const handleTabChange = useCallback(
    (value: string) => {
      setActiveTab(value as EventStatus);
      setSearchParams({ type: value }, { replace: true });
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (eventsData.data && eventsData.data.length > 0) {
      setEvents(eventsData.data.filter(ev => ev.status === activeTab));
    }
  }, [activeTab, eventsData.data]);

  let content: React.ReactNode;
  if (eventsData.isPending) {
    content = <BarLoader />;
  } else if (eventsData.isFetching) {
    content = <BarLoader />;
  } else if (eventsData.isError) {
    content = <div>Error,,</div>;
  } else if (!events || events.length === 0) {
    content = <NoResult />;
  } else {
    content = <EventList events={events} />;
  }
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
          <TabsTrigger value={p}>진행 중</TabsTrigger>
          <TabsTrigger value={d}>진행 완료</TabsTrigger>
        </TabsList>
        <TabsContent value={p}>{content}</TabsContent>
        <TabsContent value={d}>{content}</TabsContent>
      </Tabs>
      <FloatingButton />
    </HomePageWrapper>
  );
};

export default HomePage;
