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
import RoomInventoryManagement from "../pages/RoomInventory/RoomInventoryManagement";

import AddNewRoom from "../pages/RoomManagement/AddNewRoom/AddNewRoom";
import AllRooms from "../pages/RoomManagement/AllRooms/AllRooms";

import AssetManagement from "../pages/AssetManagement/AssetManagement";
import OfficeAsset from "../pages/OfficeAsset/OfficeAsset";
import WalkInFrom from "../compoents/booking/WalkInForm";
import Registration from "../compoents/booking/RegistrationForm";
import EmployeeProfile from "../pages/hrmPayroll/EmployeeProfile/EmployeeProfile";
import EmployeeJobroleProfile from "../pages/hrmPayroll/employeeJobroleProfile/EmployeeJobroleProfile";

import SearchLeave from "../pages/leaveManagement/LeaveSearch/LeaveSearch";
import LeaveDetail from "../pages/leaveManagement/LeaveDetail/LeaveDetail";
import AdminLeaveDetailList from "../pages/leaveManagement/AdminLeaveDetailList/AdminLeaveDetailList";
import HotelInfoForm from "../hotel-info/HotelInfoForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>page not found</div>}>
      <Route path="/login" element={<AuthSignInCover />} />
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="" element={<Root />}>
          <Route index element={<MainContent />} />

          <Route
            path="employee-job-profile"
            element={<EmployeeJobroleProfile />}
          />
          <Route path="hotel-profile" element={<HotelProfile />} />
          <Route path="room-inventory" element={<RoomInventoryManagement />} />

          <Route path="asset-management" element={<AssetManagement />} />
          <Route path="office-asset" element={<OfficeAsset />} />

          <Route path="walkin" element={<WalkInFrom />} />
          <Route path="registration" element={<Registration />} />
          <Route path="add-room" element={<AddNewRoom />} />
          <Route path="all-rooms" element={<AllRooms />} />
          <Route path="employee-profile" element={<EmployeeProfile />} />

          <Route path="search-leave" element={<SearchLeave />} />
          <Route
            path="admin-leave-detaillist"
            element={<AdminLeaveDetailList />}
          />
          <Route path="leave-detail/:employeeId" element={<LeaveDetail />} />
          <Route path="hotel-info" element={<HotelInfoForm />} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
