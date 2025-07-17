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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>page not found</div>}>
      <Route path="/login" element={<AuthSignInCover />} />
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="" element={<Root />}>
          <Route index element={<MainContent />} />

           <Route path="SearchingRegistrate" element={<SearchingRegistrate></SearchingRegistrate>}/> 
           <Route path="userInformation" element={<UserInformation></UserInformation>}/>

          <Route path="hotel-profile" element={<HotelProfile />} />
 
        </Route>
      </Route>
    </Route>
  )
);

export default router;
