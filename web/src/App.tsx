import {
  AuthPage,
  CollectCommentsPage,
  CreateSurveyPageStep1,
  CreateSurveyPageStep2,
  CreateSurveyPageStep3,
  CrawlingPage,
  HomePage,
  ResultPage,
  MyEvent,
  Root,
} from '@/pages';
import store from '@/store';
import GlobalStyles from '@/styles/global-styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Components from './pages/components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'result', element: <ResultPage /> },
      // 공통 컴포넌트 테스트 페이지
      { path: 'myevent', element: <MyEvent /> },
      {
        path: 'survey',
        children: [
          { path: 'new/step1', element: <CreateSurveyPageStep1 /> },
          { path: 'new/step2', element: <CreateSurveyPageStep2 /> },
          { path: 'new/step3', element: <CreateSurveyPageStep3 /> },
        ],
      },
      // { path: 'components', element: <Components /> },
      { path: 'collect', element: <CollectCommentsPage /> },
      { path: 'crawling', element: <CrawlingPage /> },
    ],
  },
  { path: '/auth', element: <AuthPage /> },
]);

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}
