import ListModal from '../components/ListModal'
import ListSearch from '../components/ListSearch'
import Card from '../components/Card'

const routes = [
  {
    path: '/list-search',
    element: <ListSearch />,
  },
  {
    path: '/list-modal',
    element: <ListModal />,
  },
  {
    path: '/card',
    element: <Card />,
  },
  // {
  //   path: '*',r
  //   element: <Quickstart />,
  // },
]

export default routes
