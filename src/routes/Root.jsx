import { Outlet } from "react-router";
import Header from "../compoents/header/Header";
import Sidebar from "../compoents/Sidebar/Sidebar";
import Footer from "../compoents/Footer/Footer";

import "../style/main/main.css";

import { useRef } from "react";
import "../style/main/main.css";

function Root() {
  const sideBar = useRef(null);
  const mainContent = useRef(null);
  const headerContent = useRef(null);

  const toggleHandler = () => {
    sideBar.current.classList.toggle("toggleMenu");
    mainContent.current.classList.toggle("toggleContent");
    headerContent.current.classList.toggle("toggleContent");
  };

  return (
    <>
      <Sidebar ref={sideBar} />
      <Header toggleHandler={toggleHandler} ref={headerContent} />
      <div ref={mainContent} className="main-content" id="main-content">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Root;
