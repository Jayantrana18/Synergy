import React, { useState, useEffect } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { useTheme } from "next-themes";
import Sidebar from "@/components/SideBar/Sidebar";

const Dashboard = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSignOut = () => {
    // Handle the sign-out logic
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Determine colors based on theme
  const isDarkMode = theme === "dark";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const bgSidebar = isDarkMode ? "bg-gray-800" : "bg-blue-200";
  const bgMain = isDarkMode ? "bg-gray-900" : "bg-white";

  // Sample patient data
  const patient = {
    name: "User Details",
    healthStats: {
      bloodPressure: "Calculating...",
    },
  };

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
        <h2 className="text-4xl font-bold mb-8">Patient Dashboard</h2>

        {/* Patient Info Section */}
        <div className={`bg-card ${textColor} rounded-lg p-6 mb-6 shadow-md`}>
          <h3 className="text-2xl font-bold mb-4">{patient.name}</h3>
        </div>

        {/* Health Stats Section with iFrames */}
        <div className={`bg-card ${textColor} rounded-lg p-6 shadow-md`}>
          <h3 className="text-2xl font-bold mb-4">Health Stats</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex flex-col items-center">
              <FaHeartbeat className="text-4xl mb-2" />
              <p>Heart Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
            {/* iFrame for Heart Rate Graph */}
            <div className="mb-6">
              <iframe
                className="w-full sm:w-[450px] md:w-[500px] lg:w-[500px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]"
                style={{ border: "1px solid #cccccc" }}
                src="https://thingspeak.com/channels/2318088/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&yaxismax=110"
              ></iframe>
            </div>

            {/* iFrame for Heart Rate Widget */}
            <div className="mb-6">
              <iframe
                className="w-full sm:w-[450px] md:w-[500px] lg:w-[500px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]"
                style={{ border: "1px solid #cccccc" }}
                src="https://thingspeak.com/channels/2318088/widgets/732840"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
