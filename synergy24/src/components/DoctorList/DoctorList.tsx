import React from "react";
import { useTheme } from "next-themes";

interface DoctorListProps {
  doctors: { id: number; name: string; specialty: string }[];
  onSelect: (id: number | "ai") => void;
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors, onSelect }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const bgCard = isDarkMode ? "bg-gray-700" : "bg-blue-400"; // Changed to a lighter blue for light mode
  const hoverButton = isDarkMode ? "hover:bg-gray-600" : "hover:bg-blue-500"; // Changed to a lighter blue for light mode with a good hover effect

  return (
    <div className={`w-full md:w-1/3 lg:w-1/4 ${bgCard} p-4`}>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Contacts</h2>
      <ul>
        {doctors.map((doctor) => (
          <li
            key={doctor.id}
            onClick={() => onSelect(doctor.id)}
            className={`cursor-pointer p-3 rounded-md ${hoverButton} mb-2 ${bgCard}`}
          >
            <h3 className={`text-lg font-semibold ${textColor}`}>
              {doctor.name}
            </h3>
            <p className={`text-sm ${textColor}`}>{doctor.specialty}</p>
          </li>
        ))}
        <li
          onClick={() => onSelect("ai")}
          className={`cursor-pointer p-3 rounded-md ${hoverButton} ${bgCard}`}
        >
          <h3 className={`text-lg font-semibold ${textColor}`}>Chat with AI</h3>
        </li>
      </ul>
    </div>
  );
};

export default DoctorList;
