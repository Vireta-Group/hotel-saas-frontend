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

import AssetManagement from "../pages/AssetManagement/AssetManagement";
import OfficeAsset from "../pages/OfficeAsset/OfficeAsset";
import WalkInFrom from "../compoents/booking/WalkInForm";
import Registration from "../compoents/booking/RegistrationForm";
import EmployeeProfileDocument from "../pages/hrmPayroll/employeeProfileDocument/EmployeeProfileDocument";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>page not found</div>}>
      <Route path="/login" element={<AuthSignInCover />} />
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="" element={<Root />}>
          <Route index element={<MainContent />} />
          <Route path="hotel-profile" element={<HotelProfile />} />

          <Route path="asset-management" element={<AssetManagement />} />
          <Route path="office-asset" element={<OfficeAsset />} />

          <Route path="walkin" element={<WalkInFrom />} />
          <Route path="registration" element={<Registration />} />
          <Route path="add-room" element={<AddNewRoom />} />
          <Route path="all-rooms" element={<AllRooms />} />
          <Route path="employee-profile" element={<EmployeeProfileDocument></EmployeeProfileDocument>}></Route>
        </Route>
      </Route>
    </Route>
  )
);

export default router;
