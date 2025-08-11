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
import HotelInfoForm from "../pages/hotel-info/HotelInfoForm";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import AdminLeaveControl from "../pages/leaveManagement/AdminLeaveControl/AdminLeaveControl";
import JobRoleAttendance from "../pages/attendanceShiftManagement/JobRoleAttendance/JobRoleAttendance";
import ExpenceCategorey from "../coreModule/accounting/expenceCategorey/ExpenceCategorey";
import EarnCategory from "../coreModule/accounting/earnCategory/EarnCategory";
import BankPage from "../coreModule/accounting/bankPage/BankPage";
import AddCategory from "../coreModule/restaurant/addCategory/AddCategory";

import DailySalesReport from "../coreModule/restaurant/dailySellReport/DailySellReport";
import Deposit from "../coreModule/accounting/bankForm/deposit/Deposit";
import RootBankForm from "../coreModule/accounting/bankForm/rootBankForm/rootBankForm";
import Withdraw from "../coreModule/accounting/bankForm/withdraw/Withdraw";
import AddTableForm from "../coreModule/restaurant/addTable/AddTable";
import OrderForm from "../coreModule/restaurant/orderForm/OrderForm";
import TableOrder from "../coreModule/restaurant/orderForm/TableOrder";
import RoomService from "../coreModule/restaurant/orderForm/RoomService";
import AddCategoryForm from "../coreModule/restaurant/addSubCategory/AddSubcategory";
import EarningForm from "../coreModule/accounting/earningForm/EarningForm";
import ExpenseForm from "../coreModule/accounting/expenseForm/expenseForm";
import IssueForm from "../coreModule/inventorySuppliers/issueForm/issueForm";
import Input from "../ui/input/Input";
import Button from "../ui/submitButton/SubmitButton";
import SubmitButton from "../ui/submitButton/SubmitButton";
import Demo from "../Demo";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>page not found</div>}>
      <Route path="/login" element={<AuthSignInCover />} />
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="" element={<Root />}>
          <Route index element={<MainContent />} />
          <Route path="add-table" element={<AddTableForm />} />
          <Route path="earn-category-form" element={<EarnCategory />} />
          <Route path="earning-form" element={<EarningForm />} />
          <Route path="expense-form" element={<ExpenseForm />} />
          <Route
            path="SearchingRegistrate"
            element={<SearchingRegistrate></SearchingRegistrate>}
          />
          <Route
            path="userInformation"
            element={<UserInformation></UserInformation>}
          />
          <Route
            path="SearchingRegistrate"
            element={<SearchingRegistrate></SearchingRegistrate>}
          />
          <Route
            path="userInformation"
            element={<UserInformation></UserInformation>}
          />

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
          <Route path="employJobRole" element={<EmployeJobroleProfile />} />
          <Route path="employJobRole" element={<EmployeJobroleProfile />} />
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
          <Route path="issue-form" element={<IssueForm/>} />
          <Route path="admin-leave-control" element={<AdminLeaveControl />} />
          <Route path="job-role-attendance" element={<JobRoleAttendance />} />
          <Route path="exepenceCategorey" element={<ExpenceCategorey />} />
          <Route path="bank" element={<BankPage />} />

          <Route
            path="addCategory"
            element={<AddCategory></AddCategory>}
          ></Route>
          <Route path="deposit" element={<Deposit />} />
          <Route path="root-bank-form" element={<RootBankForm />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route
            path="add-table"
            element={<AddTableForm></AddTableForm>}
          ></Route>
          <Route path="order-form" element={<OrderForm></OrderForm>}></Route>
          <Route path="table-order" element={<TableOrder></TableOrder>}></Route>
          <Route
            path="room-service"
            element={<RoomService></RoomService>}
          ></Route>
          <Route path="demo" element={<Demo />} />
          <Route path="addcategoryform" element={<AddCategoryForm />} />
          <Route path="daily-sell-report" element={<DailySalesReport />} />
        </Route>
        <Route path="404" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
);
export default router;
