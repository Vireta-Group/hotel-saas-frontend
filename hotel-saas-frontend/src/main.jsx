import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewRoom from './Pages/AddNewRoom/AddNewRoom';
// import RoomTypes from './Pages/RoomTypes/RoomTypes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RoomTypes></RoomTypes> */}
    <AddNewRoom></AddNewRoom>

  </StrictMode>,
)
