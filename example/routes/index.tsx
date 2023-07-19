import ListModal from '../components/ListModal'
import ListSearch from '../components/ListSearch'
import Card from '../components/Card'
import Emoji from '../components/Emoji'
import Loading from '../components/Loading'
import LoadingContainer from '../components/LoadingContainer'

const routes = [
  {
    path: '/emoji',
    element: <Emoji />,
  },
  {
    path: '/card',
    element: <Card />,
  },
  {
    path: '/list-search',
    element: <ListSearch />,
  },
  {
    path: '/list-modal',
    element: <ListModal />,
  },
  {
    path: '/loading',
    element: <Loading />,
  },
  {
    path: '/loading-container',
    element: <LoadingContainer />,
  },

  // {
  //   path: '*',r
  //   element: <Quickstart />,
  // },
]

export default routes
