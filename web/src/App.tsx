import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages';

import GlobalStyles from './styles/global-styles';
import SplashScreen from '@/components/SplashScreen';

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3초 후에 로딩 종료

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <SplashScreen /> : <RouterProvider router={router} />}
    </>
  );
}
