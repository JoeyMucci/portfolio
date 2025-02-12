import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

// NOT USING ROUTER SINCE SINGLE PAGE APP

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage toggle={() => {}}/>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
