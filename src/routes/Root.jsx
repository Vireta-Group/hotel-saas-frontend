import { Outlet } from "react-router";
import Header from "../compoents/Header/Header";
import Sidebar from "../compoents/Sidebar/Sidebar";
import Footer from "../compoents/Footer/Footer";
import "../style/main/main.css"

function Root() {
  return (
    <>
      <Sidebar />
      <div className="main-content" id="main-content">
        <Header />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Root;
