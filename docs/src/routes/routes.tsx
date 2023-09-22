import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../layouts'
import guideRoutes from './routes_guide'
import componentRoutes from './routes_component'
import businessRoutes from './routes_business'

const routes = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: 'guide',
        name: '开发指南',
        element: <Outlet />,
        children: guideRoutes,
      },
      {
        path: 'components',
        name: '基础组件',
        element: <Outlet />,
        children: componentRoutes,
      },
      {
        path: 'business',
        name: '业务组件',
        element: <Outlet />,
        children: businessRoutes,
      },
      {
        path: '/',
        element: <Navigate to="/guide/quickstart" />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/guide/quickstart" />,
  },
]

export default routes
