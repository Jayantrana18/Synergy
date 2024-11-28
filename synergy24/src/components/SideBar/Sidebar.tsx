import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  FiUsers,
  FiShoppingBag,
  FiMessageSquare,
  FiCalendar,
  FiHelpCircle,
  FiBell,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";

interface SidebarProps {
  textColor: string;
  bgSidebar: string;
  handleSignOut: () => void;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  textColor,
  bgSidebar,
  handleSignOut,
  toggleTheme,
}) => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // State for mobile sidebar toggle
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.asPath);
  }, [router.asPath]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    router.push(link);
  };

  const handleSignOutRedirect = () => {
    handleSignOut(); // Call the passed handleSignOut function if necessary
    router.push("/"); // Redirect to the home page
  };

  return (
    <div className="flex">
      {/* Mobile Hamburger Icon */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-3xl"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`h-screen w-64 fixed top-0 left-0 z-50 flex flex-col justify-between ${bgSidebar} ${textColor} shadow-lg transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64`}
      >
        {/* Close Button for Mobile */}
        {isSidebarOpen && (
          <div className="p-4 absolute top-0 right-0 md:hidden">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-3xl"
            >
              <FiX />
            </button>
          </div>
        )}

        {/* Top Section */}
        <div className="p-4 space-y-8">
          {/* Logo */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold tracking-wide">
              MedTech Mavericks
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <a
              onClick={() => handleLinkClick("/patients")}
              className={`flex items-center gap-4 p-2 rounded-lg text-lg cursor-pointer transition ${
                activeLink === "/patients"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-gray-200 dark:hover:text-black"
              }`}
            >
              <FiUsers className="text-2xl" />
              Patients
            </a>
            <a
              onClick={() => handleLinkClick("/store")}
              className={`flex items-center gap-4 p-2 rounded-lg text-lg cursor-pointer transition ${
                activeLink === "/store"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-gray-200 dark:hover:text-black"
              }`}
            >
              <FiShoppingBag className="text-2xl" />
              Store
            </a>
            <div>
              <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className={`flex items-center justify-between w-full gap-4 p-2 rounded-lg text-lg cursor-pointer transition ${
                  isChatOpen
                    ? "bg-gray-200"
                    : "hover:bg-gray-200 dark:hover:text-black"
                }`}
              >
                <div className="flex items-center gap-4">
                  <FiMessageSquare className="text-2xl" />
                  Chat
                </div>
                <span>{isChatOpen ? "-" : "+"}</span>
              </button>
              {isChatOpen && (
                <div className="pl-8 mt-2 space-y-2 text-gray-600">
                  <a
                    onClick={() => handleLinkClick("/chat/prompt-craft")}
                    className="block text-sm hover:text-blue-600 dark:hover:text-black cursor-pointer"
                  >
                    Prompt Craft
                  </a>
                  <a
                    onClick={() => handleLinkClick("/chat/daily-theme")}
                    className="block text-sm hover:text-blue-600 dark:hover:text-black cursor-pointer"
                  >
                    Daily Theme
                  </a>
                  <a
                    onClick={() => handleLinkClick("/chat/newbies")}
                    className="block text-sm hover:text-blue-600 dark:hover:text-black cursor-pointer"
                  >
                    Newbies
                  </a>
                </div>
              )}
            </div>
            <a
              onClick={() => handleLinkClick("/appointment")}
              className={`flex items-center gap-4 p-2 rounded-lg text-lg cursor-pointer transition ${
                activeLink === "/appointment"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-gray-200 dark:hover:text-black"
              }`}
            >
              <FiCalendar className="text-2xl" />
              Appointments
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 space-y-4">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-4 p-2 text-lg rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:text-black transition"
          >
            <FiMoon className="text-2xl" />
            Dark Mode
          </button>
          <a className="flex items-center gap-4 p-2 text-lg rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:text-black transition">
            <FiHelpCircle className="text-2xl" />
            Help
          </a>
          <a className="flex items-center gap-4 p-2 text-lg rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:text-black transition">
            <FiBell className="text-2xl" />
            Updates
          </a>

          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/images/profile.jpg" // Replace with actual profile picture URL
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">John Doe</p>{" "}
              {/* Replace with user's name */}
              <p className="text-sm text-gray-500">Admin</p>{" "}
              {/* Replace with user's role if needed */}
            </div>
          </div>

          <button
            onClick={handleSignOutRedirect} // Updated to redirect on sign-out
            className="w-full bg-red-500 text-white py-2 rounded-lg text-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
