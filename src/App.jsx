import { RouterProvider } from 'react-router'
import routerConfig from './routes/routerConfig'

function App() {
  return (
    <RouterProvider router={routerConfig} />
  )
}

export default App