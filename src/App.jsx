<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterForm/>
    </>
  )
}

export default App
=======
=======
>>>>>>> 1ec8137b4ebe2b39e7b13395054e8ae926b49d0d
import { RouterProvider } from "react-router";
import router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
<<<<<<< HEAD
>>>>>>> d098403091fc44dd67dc79347cbd03e90b237302
=======
>>>>>>> 1ec8137b4ebe2b39e7b13395054e8ae926b49d0d
