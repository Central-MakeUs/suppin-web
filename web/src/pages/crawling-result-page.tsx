// 당첨자 선청하기 - 댓글 크롤링 결과 페이지입니다.
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomePageWrapper } from './home-page.styles';

import { Subtitle } from '@/components/common/Subtitle';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/tabs';
import Comment from '@/components/winner/Comment';
import { WinnerContent } from '@/components/winner/Winner';

export const CrawlingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>('comment');

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
      {/* 추후 수정 예정 - Redux title */}
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
          <WinnerContent />
        </TabsContent>
      </Tabs>
    </HomePageWrapper>
  );
};
