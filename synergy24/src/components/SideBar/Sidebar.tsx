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
import { logout } from "../../firebase"; // Ensure the logout function is imported

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
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // State for mobile sidebar toggle
  const [showHelpPopup, setShowHelpPopup] = useState<boolean>(false); // State for Help popup
  const [showUpdatesPopup, setShowUpdatesPopup] = useState<boolean>(false); // State for Updates popup
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.asPath); // Updates active link when route changes
  }, [router.asPath]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Update active link
    router.push(link); // Navigate to the clicked link
  };

  const handleLogout = async () => {
    await logout(); // Call the logout function
    router.push("/"); // Redirect to home page after logout
  };

  // Function to close any open popups
  const closePopups = () => {
    setShowHelpPopup(false);
    setShowUpdatesPopup(false);
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
            {/* Chat Link */}
            <a
              onClick={() => handleLinkClick("/messages")}
              className={`flex items-center gap-4 p-2 rounded-lg text-lg cursor-pointer transition ${
                activeLink === "/messages"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-gray-200 dark:hover:text-black"
              }`}
            >
              <FiMessageSquare className="text-2xl" />
              Chat
            </a>
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
          <button
            onClick={() => setShowHelpPopup(true)}
            className="flex items-center gap-4 p-2 text-lg rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:text-black transition"
          >
            <FiHelpCircle className="text-2xl" />
            Help
          </button>
          <button
            onClick={() => setShowUpdatesPopup(true)}
            className="flex items-center gap-4 p-2 text-lg rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:text-black transition"
          >
            <FiBell className="text-2xl" />
            Updates
          </button>

          <button
            onClick={handleLogout} // Calls the logout function
            className="w-full bg-red-500 text-white py-2 rounded-lg text-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay for Background Darkening */}
      {(showHelpPopup || showUpdatesPopup) && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" />
      )}

      {/* Help Popup */}
      {showHelpPopup && (
        <div
          className={`fixed inset-0 z-50 ${bgSidebar} ${textColor} flex justify-center items-center`}
        >
          <div
            className={`relative ${bgSidebar} rounded-lg p-6 shadow-lg max-w-lg w-full`}
          >
            <h3 className="text-2xl font-bold text-center mb-4">Help</h3>
            <p className="text-lg mb-4">
              This sidebar contains navigation links to various sections of the
              app:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Patients: View and manage patient information.</li>
              <li>Store: Browse and purchase medical products.</li>
              <li>Chat: Communicate with medical professionals and support.</li>
              <li>Appointments: Schedule or view upcoming appointments.</li>
            </ul>
            <button
              onClick={closePopups}
              className={`mt-4 px-6 py-2 ${bgSidebar} rounded-full text-sm font-bold uppercase shadow-md`}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Updates Popup */}
      {showUpdatesPopup && (
        <div
          className={`fixed inset-0 z-50 ${bgSidebar} ${textColor} flex justify-center items-center`}
        >
          <div
            className={`relative ${bgSidebar} rounded-lg p-6 shadow-lg max-w-lg w-full`}
          >
            <h3 className="text-2xl font-bold text-center mb-4">Updates</h3>
            <p className="text-lg mb-4">No new notifications at the moment.</p>
            <button
              onClick={closePopups}
              className={`mt-4 px-6 py-2 ${bgSidebar} rounded-full text-sm font-bold uppercase shadow-md`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
