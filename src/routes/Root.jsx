import { Outlet } from "react-router";
import Header from "../compoents/Header/Header";
import Sidebar from "../compoents/Sidebar/Sidebar";
import Footer from "../compoents/Footer/Footer";

function Root() {
  return (
    <>
      <Sidebar />
      <div class="main-content" id="main-content">
        <Header />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Root;
