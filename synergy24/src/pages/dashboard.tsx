import React, { useState, useEffect } from "react";
import { FaUserCircle, FaMoon, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Sidebar from "@/components/SideBar/Sidebar";

const Dashboard = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSignOut = () => {
    router.push("/");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Determine colors based on theme
  const isDarkMode = theme === "dark";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const bgSidebar = isDarkMode ? "bg-blue-700" : "bg-blue-200";
  const bgMain = isDarkMode ? "bg-blue-900" : "bg-white";
  const bgCard = isDarkMode ? "bg-blue-600" : "bg-blue-200";
  const bgButton = isDarkMode ? "bg-blue-500" : "bg-blue-300";
  const hoverButton = isDarkMode ? "hover:bg-blue-400" : "hover:bg-blue-400";

  return (
    <div className={`h-screen flex ${bgMain} ${textColor}`}>
      {/* Sidebar */}
      <Sidebar
        textColor={textColor}
        bgSidebar={bgSidebar}
        handleSignOut={handleSignOut}
        toggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className={`flex-grow ${bgMain} ${textColor} p-8`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">PATIENTS</h2>
          <div className="flex space-x-4">
            {/* User and Theme Icons */}
            <FaUserCircle className={`text-3xl cursor-pointer ${textColor}`} />
            <FaMoon
              className={`text-3xl cursor-pointer ${textColor}`}
              onClick={toggleTheme}
            />
          </div>
        </div>

        {/* Patient Details List */}
        <div className="space-y-4">
          {/* Individual Card */}
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center justify-between ${bgCard} ${textColor} rounded-lg p-4 shadow-md`}
            >
              <p className="font-bold text-lg">PATIENT DETAILS</p>
              <button
                className={`p-2 ${bgButton} ${textColor} rounded-full ${hoverButton} shadow-md`}
              >
                <FaArrowRight className={`${textColor}`} />
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
