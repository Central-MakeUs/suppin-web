import { AuthPage, HomePage, Root } from '@/pages';

import store from '@/store';
import GlobalStyles from '@/styles/global-styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

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
      {
        path: 'result',
        lazy: async () => {
          const { ResultPage } = await import('@/pages/result-page');
          return {
            Component: ResultPage,
          };
        },
      },
      {
        path: 'mypage',
        lazy: async () => {
          const { default: MyPage } = await import('@/pages/my-page');
          return {
            Component: MyPage,
          };
        },
      },
      {
        path: 'myevent',
        lazy: async () => {
          const { MyEvent } = await import('@/pages/myevent-page');
          return {
            Component: MyEvent,
          };
        },
      },

      {
        path: 'survey',
        lazy: async () => {
          const { SurveyPage } = await import('@/pages/survey-page');
          return { Component: SurveyPage };
        },
        children: [
          {
            path: 'new',
            lazy: async () => {
              const { CreateSurveyPage } = await import(
                '@/pages/create-survey-page'
              );
              return {
                Component: CreateSurveyPage,
              };
            },
          },
        ],
      },
      {
        path: 'collect',
        lazy: async () => {
          const { CollectCommentsPage } = await import(
            '@/pages/collect-comments-page'
          );
          return {
            Component: CollectCommentsPage,
          };
        },
      },
      {
        path: 'crawling',
        lazy: async () => {
          const { CrawlingPage } = await import('@/pages/crawling-result-page');
          return {
            Component: CrawlingPage,
          };
        },
      },
    ],
  },
  { path: '/auth', element: <AuthPage /> },
]);

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Toaster position="bottom-center" richColors />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}
