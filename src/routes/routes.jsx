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
import RoomManegment from "../pages/roomManegment/Roommanegment";

import AssetManagement from "../pages/AssetManagement/AssetManagement";
import OfficeAsset from "../pages/OfficeAsset/OfficeAsset";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>page not found</div>}>
      <Route path="/login" element={<AuthSignInCover />} />
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="" element={<Root />}>
          <Route index element={<MainContent />} />
          <Route path="hotel-profile" element={<HotelProfile />} />

          <Route path="room" element={<RoomManegment />} />

          <Route path="asset-management" element={<AssetManagement />} />
          <Route path="office-asset" element={<OfficeAsset />} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
