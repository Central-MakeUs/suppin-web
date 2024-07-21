import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="progress">진행 중</TabsTrigger>
        <TabsTrigger value="complete">진행 완료</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default HomePage;
