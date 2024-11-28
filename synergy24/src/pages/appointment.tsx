import { useState, useEffect } from "react";
import Sidebar from "@/components/SideBar/Sidebar";
import Booking from "@/components/Booking/Booking"; // Ensure this file exists
import {
  FaUserCircle,
  FaMoon,
  FaCalendarAlt,
  FaClock,
  FaUser,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // Import framer-motion for animations

const AppointmentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<{
    name: string;
    specialty: string;
    availability: string;
    image: string;
  } | null>(null);

  const [bgMain, setBgMain] = useState<string>("bg-white");
  const [bgSidebar, setBgSidebar] = useState<string>("bg-blue-200");
  const [bgCard, setBgCard] = useState<string>("bg-blue-200");
  const [bgButton, setBgButton] = useState<string>("bg-blue-300");
  const [hoverButton, setHoverButton] = useState<string>("hover:bg-blue-400");
  const [textColor, setTextColor] = useState<string>("text-black");
  const [cardTextColor, setCardTextColor] = useState<string>("text-gray-600");

  const doctors = [
    {
      name: "Dr. Smith",
      specialty: "Cardiology",
      availability: "9 AM - 5 PM",
    },
    {
      name: "Dr. Johnson",
      specialty: "Dermatology",
      availability: "10 AM - 4 PM",
    },
    {
      name: "Dr. Brown",
      specialty: "Neurology",
      availability: "1 PM - 6 PM",
    },
    {
      name: "Dr. Davis",
      specialty: "Pediatrics",
      availability: "8 AM - 3 PM",
    },
  ];

  const handleBooking = (doctor: {
    name: string;
    specialty: string;
    availability: string;
  }) => {
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDoctor(null);
  };

  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleSignOut = () => {
    router.push("/");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Determine colors based on theme
    const isDarkMode = theme === "dark";
    setTextColor(isDarkMode ? "text-white" : "text-black");
    setBgMain(isDarkMode ? "bg-gray-900" : "bg-white");
    setBgSidebar(isDarkMode ? "bg-gray-800" : "bg-blue-200");
    setBgCard(isDarkMode ? "bg-gray-700" : "bg-blue-200");
    setBgButton(isDarkMode ? "bg-gray-600" : "bg-blue-300");
    setHoverButton(isDarkMode ? "hover:bg-gray-500" : "hover:bg-blue-400");
    setCardTextColor(isDarkMode ? "text-gray-300" : "text-gray-600");
  }, [theme]);

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
          <h2 className="text-4xl font-bold">APPOINTMENTS</h2>
        </div>

        {/* Appointment Details List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              className={`flex flex-col items-center justify-between ${bgCard} rounded-lg p-6 shadow-lg transition duration-300 transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* User Icon Instead of Doctor Image */}
              <FaUser
                size={100}
                className="text-blue-500 mb-4" // Icon size and color
              />
              <h3 className={`font-bold text-lg text-center ${cardTextColor}`}>
                {doctor.name}
              </h3>
              <p className={`text-sm ${cardTextColor}`}>
                <FaUserCircle className="inline mr-1" />
                {doctor.specialty}
              </p>
              <p className={`text-sm ${cardTextColor}`}>
                <FaCalendarAlt className="inline mr-1" />
                {doctor.availability}
              </p>
              <button
                className={`mt-4 px-6 py-2 ${bgButton} rounded-full ${hoverButton} text-sm font-bold uppercase shadow-md`}
                onClick={() => handleBooking(doctor)}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Booking Modal */}
      {modalOpen && selectedDoctor && (
        <Booking doctor={selectedDoctor} onClose={closeModal} />
      )}
    </div>
  );
};

export default AppointmentPage;
