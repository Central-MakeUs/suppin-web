import {
  AuthPage,
  CollectCommentsPage,
  CreateSurveyPage,
  HomePage,
  ResultPage,
  Root,
} from '@/pages';
import store from '@/store';
import GlobalStyles from '@/styles/global-styles';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'result', element: <ResultPage /> },
      {
        path: 'survey',
        children: [{ path: 'new', element: <CreateSurveyPage /> }],
      },
      { path: 'collect', element: <CollectCommentsPage /> },
    ],
  },
  { path: '/auth', element: <AuthPage /> },
]);

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  );
}
