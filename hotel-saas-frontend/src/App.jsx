import { Routes, Route } from 'react-router-dom';
import AddNewRoom from './Pages/AddNewRoom/AddNewRoom';
import AllRooms from './Pages/AllRooms/AllRooms';

function App() {
  return (
    <Routes>
      <Route path="/add-room" element={<AddNewRoom></AddNewRoom>} />
      <Route path="/all-rooms" element={<AllRooms></AllRooms>} />
    </Routes>
  );
}

export default App;
