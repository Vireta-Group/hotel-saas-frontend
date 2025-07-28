import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import ProtectRoutes from "./ProtectRoutes";
import Root from "./Root";
import MainContent from "../compoents/Main/MainContent";
import AuthSignInCover from "../compoents/SignIn/AuthSingInCover";
import SearchingRegistrate from "../pages/SearchingRegistrate/SearchingRegistrate";
import HotelProfile from "../pages/HotelProfile/HotelProfile";
import UserInformation from "../pages/userInformation/UserInformation";
import EmployeJobroleProfile from "../pages/hrmPayroll/employeeJobroleProfile/EmployeJobroleProfile";
import RoomInventoryManagement from "../pages/RoomInventory/RoomInventoryManagement";
import AddNewRoom from "../pages/RoomManagement/AddNewRoom/AddNewRoom";
import AllRooms from "../pages/RoomManagement/AllRooms/AllRooms";
import AssetManagement from "../pages/AssetManagement/AssetManagement";
import OfficeAsset from "../pages/OfficeAsset/OfficeAsset";
import WalkInFrom from "../compoents/booking/WalkInForm";
import Registration from "../compoents/booking/RegistrationForm";
import EmployeeProfile from "../pages/hrmPayroll/EmployeeProfile/EmployeeProfile";
import EmployeeJobroleProfile from "../pages/hrmPayroll/employeeJobroleProfile/EmployeeJobroleProfile";
import SettingsAndConfigureForm from "../pages/settingsAndConfiguration/settings/SettingsAndConfigureForm";
import SearchLeave from "../pages/leaveManagement/LeaveSearch/LeaveSearch";
import LeaveDetail from "../pages/leaveManagement/LeaveDetail/LeaveDetail";
import AdminLeaveDetailList from "../pages/leaveManagement/AdminLeaveDetailList/AdminLeaveDetailList";
import HotelInfoForm from "../hotel-info/HotelInfoForm";
import AdminLeaveControl from "../pages/leaveManagement/AdminLeaveControl/AdminLeaveControl";
import JobRoleAttendance from "../pages/attendanceShiftManagement/JobRoleAttendance/JobRoleAttendance";
import ExpenceCategorey from "../coreModule/accounting/expenceCategorey/ExpenceCategorey";
import EarnCategory from "../coreModule/earnCategory/EarnCategory";
import BankPage from "../coreModule/accounting/bankPage/BankPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>page not found</div>}>
      <Route path="/login" element={<AuthSignInCover />} />
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="" element={<Root />}>
          <Route index element={<MainContent />} />
          <Route path="earn-category-form" element={<EarnCategory />} />
          <Route
            path="SearchingRegistrate"
            element={<SearchingRegistrate></SearchingRegistrate>}
          />
          <Route
            path="userInformation"
            element={<UserInformation></UserInformation>}
          />
          <Route path="hotel-profile" element={<HotelProfile />} />
          <Route
            path="employJobRole"
            element={<EmployeJobroleProfile />}
          />
          <Route
            path="employee-job-profile"
            element={<EmployeeJobroleProfile />}
          />
          <Route path="hotel-profile" element={<HotelProfile />} />
          <Route path="room-inventory" element={<RoomInventoryManagement />} />
          <Route path="asset-management" element={<AssetManagement />} />
          <Route path="office-asset" element={<OfficeAsset />} />
          <Route
            path="setting-and-configure-form"
            element={<SettingsAndConfigureForm />}
          />
          <Route path="walkin" element={<WalkInFrom />} />
          <Route path="registration" element={<Registration />} />
          <Route path="add-room" element={<AddNewRoom />} />
          <Route path="all-rooms" element={<AllRooms />} />
          <Route path="employee-profile" element={<EmployeeProfile />} />
          <Route path="search-leave" element={<SearchLeave />} />
          <Route path="leave-detail/:employeeId" element={<LeaveDetail />} />
          <Route path="hotel-info" element={<HotelInfoForm />} />
          <Route path="admin-leave-control" element={<AdminLeaveControl />} />
          <Route path="job-role-attendance" element={<JobRoleAttendance />} />
          <Route path="exepenceCategorey" element={<ExpenceCategorey/>}/>
          <Route path="bank" element={<BankPage />} />
        </Route>
      </Route>
    </Route>
  )
);
export default router;
