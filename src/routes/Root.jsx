import { Outlet } from "react-router";
import Header from "../compoents/header/Header";
import Footer from "../compoents/footer/Footer";
import Sidebar from "../compoents/siderbar/Sidebar";

function Root() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}


export default Root;