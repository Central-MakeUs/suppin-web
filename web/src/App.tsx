import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages';
import GlobalStyles from './styles/global-styles';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  );
}
