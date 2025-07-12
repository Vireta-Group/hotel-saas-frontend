import { Outlet } from "react-router";
import Header from "../compoents/Header/Header";
import Sidebar from "../compoents/Sidebar/Sidebar";
import Footer from "../compoents/Footer/Footer";
import { useRef } from "react";

function Root() {
  const sideBar = useRef(null);
  const mainContent = useRef(null);

  const toggleHandler = () => {
    sideBar.current.classList.toggle("toggleMenu");
    mainContent.current.classList.toggle("toggleContent");
  };
  return (
    <>
      <Sidebar ref={sideBar} />
      <div ref={mainContent} className="main-content" id="main-content">
        <Header toggleHandler={toggleHandler} />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Root;
