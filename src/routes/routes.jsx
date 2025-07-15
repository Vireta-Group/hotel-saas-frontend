import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import ProtectRoutes from "./ProtectRoutes";
import Root from "./Root";
import MainContent from "../compoents/Main/MainContent";
import AuthSignInCover from "../compoents/SignIn/AuthSingInCover";
import HotelProfile from "../pages/HotelProfile/HotelProfile";
import AddNewRoom from "../pages/RoomManagement/AddNewRoom/AddNewRoom";
import AllRooms from "../pages/RoomManagement/AllRooms/AllRooms";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>page not found</div>}>
      <Route path="/login" element={<AuthSignInCover />} />
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="" element={<Root />}>
          <Route index element={<MainContent />} />
          <Route path="hotel-profile" element={<HotelProfile />} />
          <Route path="add-room" element={<AddNewRoom />} />
          <Route path="all-rooms" element={<AllRooms />} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
