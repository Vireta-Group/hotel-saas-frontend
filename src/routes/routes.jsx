import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import ProtectRoutes from "./ProtectRoutes";
import Root from "./Root";
import MainContent from "../compoents/Main/MainContent";
import AuthSignInCover from "../compoents/SignIn/AuthSingInCover";
import HotelLicenseInfo from "../pages/hotel-licence-info/HotelLicenseInfo";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>page not found</div>}>
      <Route path="/login" element={<AuthSignInCover />} />
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="" element={<Root />}>
          <Route index element={<MainContent />} />
         <Route path="hotelLicence" element={<HotelLicenseInfo/>}/>
        </Route>
      </Route>
    </Route>
  )
);

export default router;
