import { Outlet } from 'react-router-dom'
import guideRoutes from './routes_guide'
import componentRoutes from './routes_component'
import Quickstart from '../mdx/guide/quickstart.mdx'

const routes = [
  {
    path: '',
    element: <Outlet />,
    children: [
      {
        path: 'guide',
        element: <Outlet />,
        children: guideRoutes,
      },
      {
        path: 'components',
        element: <Outlet />,
        children: componentRoutes,
      },
      {
        path: '/',
        element: <Quickstart />,
      },
    ],
  },
  {
    path: '*',
    element: <Quickstart />,
  },
]

export default routes
