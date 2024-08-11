import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomePageWrapper } from './home-page.styles';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/tabs';
import { WinnerContent } from '@/components/winner/Winner';
import Comment from '@/components/winner/Comment';
import { Subtitle } from '@/components/common/Subtitle';
import { WinnerResult } from '@/components/winner/WinnerResult'; // WinnerResult import

const CrawlingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>('comment');
  const [showWinnerResult, setShowWinnerResult] = useState<boolean>(false); // 추가된 상태

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && (type === 'comment' || type === 'winner')) {
      setActiveTab(type);
    } else {
      setSearchParams({ type: 'comment' });
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
      <Subtitle title="멤피스 공연 홍보 이벤트" />
      <Tabs
        style={{ height: 'calc(100% - 6.375rem)' }}
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <TabsList>
          <TabsTrigger value="comment">댓글 내용</TabsTrigger>
          <TabsTrigger value="winner">당첨자 선정</TabsTrigger>
        </TabsList>
        <TabsContent value="comment">
          <Comment />
        </TabsContent>
        <TabsContent value="winner">
          {showWinnerResult ? (
            <WinnerResult />
          ) : (
            <WinnerContent onWinnerSelected={() => setShowWinnerResult(true)} />
          )}
        </TabsContent>
      </Tabs>
    </HomePageWrapper>
  );
};

export default CrawlingPage;
