import { Suspense } from 'react'
import {RouterProvider} from 'react-router-dom'
import router from './routes'
import ThemeStyle from './components/Theme'
import './App.css'

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <ThemeStyle/>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
