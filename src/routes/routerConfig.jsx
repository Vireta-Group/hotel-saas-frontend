import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router";
import ContentBox from "../compoents/ContentBox";
import Root from "./Root";
import ProtectRoutes from "./ProtectRoutes";
import AuthSignInCover from "../compoents/SingIn/AuthSingInCover";

const routerConfig = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<ContentBox />} />
    </Route>
  )
);

export default routerConfig;
