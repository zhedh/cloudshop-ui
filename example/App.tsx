import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Suspense>
  )
}

export default App
