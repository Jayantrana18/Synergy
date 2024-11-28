import { useState, useEffect } from "react";
import Sidebar from "@/components/SideBar/Sidebar";
import { FaUserCircle, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // Import framer-motion for animations

const AppointmentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<{
    name: string;
    specialty: string;
    availability: string;
    slots: number;
    date: string;
  } | null>(null);

  const [bgMain, setBgMain] = useState<string>("bg-white");
  const [bgSidebar, setBgSidebar] = useState<string>("bg-blue-200");
  const [bgCard, setBgCard] = useState<string>("bg-blue-200");
  const [bgButton, setBgButton] = useState<string>("bg-blue-300");
  const [hoverButton, setHoverButton] = useState<string>("hover:bg-blue-400");
  const [textColor, setTextColor] = useState<string>("text-black");
  const [cardTextColor, setCardTextColor] = useState<string>("text-gray-600");

  const [doctors, setDoctors] = useState([
    {
      name: "Dr. Smith",
      specialty: "Cardiology",
      availability: "9 AM - 5 PM",
      slots: 3,
    },
    {
      name: "Dr. Johnson",
      specialty: "Dermatology",
      availability: "10 AM - 4 PM",
      slots: 0,
    },
    {
      name: "Dr. Brown",
      specialty: "Neurology",
      availability: "1 PM - 6 PM",
      slots: 2,
    },
    {
      name: "Dr. Davis",
      specialty: "Pediatrics",
      availability: "8 AM - 3 PM",
      slots: 5,
    },
  ]);

  const handleBooking = (doctor: {
    name: string;
    specialty: string;
    availability: string;
    slots: number;
  }) => {
    const now = new Date();
    const bookingDate = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()}`;
    setSelectedDoctor({
      ...doctor,
      date: bookingDate,
    });
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
    const isDarkMode = theme === "dark";
    setTextColor(isDarkMode ? "text-white" : "text-black");
    setBgMain(isDarkMode ? "bg-gray-900" : "bg-white");
    setBgSidebar(isDarkMode ? "bg-gray-800" : "bg-blue-200");
    setBgCard(isDarkMode ? "bg-gray-700" : "bg-blue-200");
    setBgButton(isDarkMode ? "bg-gray-600" : "bg-blue-300");
    setHoverButton(isDarkMode ? "hover:bg-gray-500" : "hover:bg-blue-400");
    setCardTextColor(isDarkMode ? "text-gray-300" : "text-gray-600");
  }, [theme]);

  const updateDoctorSlots = (doctorName: string) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor.name === doctorName
          ? { ...doctor, slots: doctor.slots - 1 }
          : doctor
      )
    );
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
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">APPOINTMENTS</h2>
        </div>

        {/* Appointment Details List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              className={`flex flex-col items-center justify-between ${bgCard} rounded-lg p-6 shadow-lg transition duration-300 transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser size={100} className="text-blue-500 mb-4" />
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
                disabled={doctor.slots <= 0}
              >
                {doctor.slots > 0 ? "Book Now" : "No Slots Available"}
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Booking Modal */}
      {modalOpen && selectedDoctor && (
        <div
          className={`fixed inset-0 z-50 ${bgMain} ${textColor} flex justify-center items-center`}
        >
          <div
            className={`relative ${bgCard} rounded-lg p-6 shadow-lg max-w-lg w-full`}
          >
            <h3 className="text-2xl font-bold text-center mb-4">
              Booking Details
            </h3>
            <p className="text-lg">Doctor: {selectedDoctor.name}</p>
            <p className="text-lg">Specialty: {selectedDoctor.specialty}</p>
            <p className="text-lg">
              Availability: {selectedDoctor.availability}
            </p>
            <p className="text-lg">Appointment Date: {selectedDoctor.date}</p>
            <p className="text-lg">Available Slots: {selectedDoctor.slots}</p>
            <button
              className={`mt-4 px-6 py-2 ${bgButton} rounded-full ${hoverButton} text-sm font-bold uppercase shadow-md`}
              disabled={selectedDoctor.slots <= 0}
              onClick={() => {
                if (selectedDoctor.slots > 0) {
                  alert("Booking successful!");
                  // Decrease slots and update the doctor list
                  updateDoctorSlots(selectedDoctor.name);
                  closeModal();
                }
              }}
            >
              {selectedDoctor.slots > 0 ? "Book Now" : "No Slots Available"}
            </button>
            <button
              className={`mt-4 px-6 py-2 ${bgButton} rounded-full ${hoverButton} text-sm font-bold uppercase shadow-md`}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
