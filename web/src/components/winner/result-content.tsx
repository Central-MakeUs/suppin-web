import { Tabs, TabsContent, TabsList, TabsTrigger } from '../common/tabs';
import { SurveyResult } from './survey-result';

export const ResultContent = () => {
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="survey-result">설문 결과</TabsTrigger>
        <TabsTrigger value="winner">당첨자 선정</TabsTrigger>
      </TabsList>
      <TabsContent value="survey-result">
        <SurveyResult />
      </TabsContent>
    </Tabs>
  );
};
