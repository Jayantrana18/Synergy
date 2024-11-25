import React, { useState } from "react";

interface BookingProps {
  doctor: {
    name: string;
    specialty: string;
    availability: string;
    image: string;
  };
  onClose: () => void;
}

const Booking: React.FC<BookingProps> = ({ doctor, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [appointmentType, setAppointmentType] = useState<string>("In-person");
  const [patientName, setPatientName] = useState<string>("");
  const [patientContact, setPatientContact] = useState<string>("");

  const availableSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "4:00 PM",
  ];

  const confirmAppointment = () => {
    if (!patientName || !patientContact || !selectedSlot) {
      alert("Please fill all the required fields.");
      return;
    }

    alert(`Appointment confirmed with Dr. ${doctor.name}!\n
      - Patient Name: ${patientName}\n
      - Contact: ${patientContact}\n
      - Time Slot: ${selectedSlot}\n
      - Type: ${appointmentType}`);
    onClose();
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-content bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Book Appointment</h2>
          <span
            className="close text-gray-400 hover:text-gray-600 cursor-pointer text-2xl"
            onClick={onClose}
          >
            &times;
          </span>
        </div>

        {/* Doctor Info */}
        <div className="mb-4 text-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500"
          />
          <h3 className="text-lg font-bold">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.specialty}</p>
          <p className="text-gray-600">Availability: {doctor.availability}</p>
        </div>

        {/* Patient Details */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Patient Name
          </label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Number
          </label>
          <input
            type="text"
            value={patientContact}
            onChange={(e) => setPatientContact(e.target.value)}
            placeholder="Enter your contact"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Time Slot Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Choose Time Slot
          </label>
          <div className="flex flex-wrap gap-2">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-2 rounded-lg ${
                  selectedSlot === slot
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                } focus:outline-none hover:bg-blue-400`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Appointment Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Appointment Type
          </label>
          <select
            value={appointmentType}
            onChange={(e) => setAppointmentType(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="In-person">In-person</option>
            <option value="Online">Online</option>
          </select>
        </div>

        {/* Confirm Button */}
        <button
          onClick={confirmAppointment}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default Booking;
