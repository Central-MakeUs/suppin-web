import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages';
import GlobalStyles from './styles/global-styles';

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
