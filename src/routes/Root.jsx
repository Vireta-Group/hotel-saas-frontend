import { Outlet } from "react-router";
import Header from "../compoents/Header/Header";
import Footer from "../compoents/Footer/Footer";
import Sidebar from "../compoents/Sidebar/Sidebar";
import { useState, useEffect, useRef } from "react";
import MainContent from "../components/Main/MainContent";

function Index() {
  // State for sidebar visibility on mobile (overlay)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State for submenu collapses
  const [openMenus, setOpenMenus] = useState({
    apps: false,
    auth: false,
    pages: true, // 'Pages' is open by default in the screenshot
    baseUI: false,
    advanceUI: false,
    forms: false,
    tables: false,
    charts: false,
    multiLevel: false,
  });
  // State for profile dropdown
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  // New state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ref for the profile dropdown button to detect clicks outside
  const profileDropdownRef = useRef(null);

  // Function to toggle sidebar visibility (mobile and desktop behavior)
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Function to toggle submenu collapse
  const toggleSubmenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    // Add or remove 'dark-mode' class to body for global theme changes
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  // Effect to handle initial screen size and resize events for sidebar
  useEffect(() => {
    const checkScreenSize = () => {
      // On desktop, ensure sidebar is not in mobile-overlay state
      if (window.innerWidth > 991.98) {
        // Bootstrap's 'lg' breakpoint
        setIsSidebarOpen(false); // Sidebar should not be 'active' (overlay) on desktop
      }
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize); // Add event listener for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup on unmount
  }, []);

  // Effect to close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutsideSidebar = (event) => {
      const sidebarElement = document.getElementById("sidebar");
      const sidebarToggleButton = document.getElementById("sidebarToggle");

      const isClickInsideSidebar =
        sidebarElement && sidebarElement.contains(event.target);
      const isClickOnToggleButton =
        sidebarToggleButton && sidebarToggleButton.contains(event.target);

      // If on mobile, sidebar is open, and click is outside sidebar and not on the toggle button
      if (
        window.innerWidth <= 991.98 &&
        isSidebarOpen &&
        !isClickInsideSidebar &&
        !isClickOnToggleButton
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideSidebar);

    return () =>
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
  }, [isSidebarOpen]);

  // Effect to close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutsideProfileDropdown = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideProfileDropdown);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutsideProfileDropdown
      );
  }, []);

  return (
    <div className="d-flex min-vh-100 overflow-hidden">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        openMenus={openMenus}
        toggleSubmenu={toggleSubmenu}
      />

      <div className="flex-grow-1 d-flex flex-column min-vh-100">
        <Header
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isProfileDropdownOpen={isProfileDropdownOpen}
          setIsProfileDropdownOpen={setIsProfileDropdownOpen}
          profileDropdownRef={profileDropdownRef}
        />
        <MainContent isSidebarOpen={isSidebarOpen} />
        <Footer />
      </div>

      {/* Floating Action Button */}
      <button className="fab-button">
        <i className="fas fa-comment-dots"></i>
      </button>
    </div>
  );
}

export default Index;
