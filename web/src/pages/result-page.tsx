import { ResultContent } from '@/components/winner/result-content';
import { useParams } from 'react-router-dom';

export const ResultPage = () => {
  const params = useParams();
  console.log(params);

  return <ResultContent />;
};
