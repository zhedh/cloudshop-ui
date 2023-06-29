import { Outlet } from 'react-router-dom'
import guideRoutes from './routes_guide'
import componentRoutes from './routes_component'
import Quickstart from '../mdx/guide/quickstart.mdx'
import Layout from '../layouts'

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
