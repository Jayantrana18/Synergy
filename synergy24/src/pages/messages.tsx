import { useState } from "react";
import { useTheme } from "next-themes";
import Sidebar from "@/components/SideBar/Sidebar";

const Messages = () => {
  const { theme, setTheme } = useTheme();

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`flex h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <Sidebar
        toggleTheme={toggleTheme}
        textColor={theme === "dark" ? "text-white" : "text-black"}
        bgSidebar={theme === "dark" ? "bg-gray-800" : "bg-blue-200"}
        handleSignOut={() => {
          /* Your sign-out logic here */
        }}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        <div
          className={`flex-grow flex items-center justify-center ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Page Under Work</h2>
            <p className="text-xl mb-4">
              This feature is currently being developed. Stay tuned for more!
            </p>
            <button
              onClick={() => alert("Explore more coming soon!")}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
