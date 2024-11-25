import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    if (path === "/dashboard") {
      setActiveLink("/dashboard");
    } else if (path === "/appointment") {
      setActiveLink("/appointment");
    } else if (path === "/store") {
      setActiveLink("/store");
    } else if (path === "/messages") {
      setActiveLink("/messages");
    }
  }, [router.asPath]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (link === "/patients") {
      router.push("/dashboard");
    } else {
      router.push(link);
    }
  };

  return (
    <aside
      className={`w-64 ${bgSidebar} ${textColor} flex flex-col justify-between shadow-lg`}
    >
      <div className="p-4">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">MEDTECH MAVERICKS</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <a
            href="/dashboard"
            onClick={() => handleLinkClick("/dashboard")}
            className={`block text-lg hover:underline ${textColor} ${
              activeLink === "/dashboard"
                ? "bg-blue-600 text-white rounded-md text-xl font-bold p-2"
                : ""
            }`}
          >
            PATIENTS
          </a>
          <a
            href="/store"
            onClick={() => handleLinkClick("/store")}
            className={`block text-lg hover:underline ${textColor} ${
              activeLink === "/store"
                ? "bg-blue-600 text-white rounded-md text-xl font-bold p-2"
                : ""
            }`}
          >
            STORE
          </a>
          <a
            href="/messages"
            onClick={() => handleLinkClick("/messages")}
            className={`block text-lg hover:underline ${textColor} ${
              activeLink === "/messages"
                ? "bg-blue-600 text-white rounded-md text-xl font-bold p-2"
                : ""
            }`}
          >
            MESSAGES
          </a>
          <a
            href="/appointment"
            onClick={() => handleLinkClick("/appointment")}
            className={`block text-lg hover:underline ${textColor} ${
              activeLink === "/appointment"
                ? "bg-blue-600 text-white rounded-md text-xl font-bold p-2"
                : ""
            }`}
          >
            APPOINTMENTS
          </a>
        </nav>
      </div>

      {/* Sign Out Button */}
      <div className="p-4">
        <button
          onClick={handleSignOut}
          className={`w-full bg-red-400 text-white py-2 rounded-md text-lg hover:bg-red-500 shadow-md`}
        >
          SIGN OUT
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
