import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { HomePage } from './pages/home'
import { TestPage } from './pages/test'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomePage />
    ),
  },
  {
    path: 'test',
    element: <TestPage />,
  },
])

export const App = () => <RouterProvider router={router} />