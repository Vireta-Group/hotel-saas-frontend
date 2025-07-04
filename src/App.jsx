import { RouterProvider } from 'react-router'
import routerConfig from './routes/routerConfig'
import AuthSingInCover from './compoents/singin/AuthSingInCover';
import Header from './compoents/header/Header';

function App() {
  return (
    // <AuthSingInCover />
    <Header />
    // <RouterProvider router={routerConfig} />
  )
}

export default App


