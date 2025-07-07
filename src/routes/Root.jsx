import { Outlet } from "react-router";
import Header from "../compoents/Header/Header";
import Sidebar from "../compoents/Sidebar/Sidebar";
import Footer from "../compoents/Footer/Footer";

function Root() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
