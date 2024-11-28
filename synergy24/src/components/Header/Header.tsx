import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control the popup visibility

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAppointmentClick = () => {
    setIsPopupOpen(true); // Open the sign-in popup when Appointment button is clicked
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  if (!mounted) {
    return <header className="flex justify-between items-center p-4"></header>;
  }

  return (
    <header className="w-full fixed top-0 z-50 bg-white bg-opacity-70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <span className="text-blue-600 text-4xl font-extrabold tracking-wider transform transition-all hover:scale-105">
            MedTech
          </span>
          <span className="text-gray-800 text-2xl font-semibold italic transform transition-all hover:scale-105">
            Mavericks
          </span>
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex items-center gap-8 transition-transform duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <Link
            href="/aboutus"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            Services
          </Link>
          <button
            onClick={handleAppointmentClick} // Open the popup on Appointment click
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out"
          >
            Appointment
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none hover:text-blue-600"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform transition-all rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-black bg-opacity-70 z-40 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-start h-full bg-white py-8">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link
            href="/aboutus"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 py-4"
            onClick={toggleMenu} // Close menu when clicked
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 py-4"
            onClick={toggleMenu} // Close menu when clicked
          >
            Services
          </Link>
          <button
            onClick={handleAppointmentClick} // Open the popup on Appointment click
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out mt-6"
          >
            Appointment
          </button>
        </div>
      </div>

      {/* Sign-in Popup */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Please Sign In to Continue
            </h2>
            <p className="text-gray-600 mb-4">
              You need to sign in to book an appointment.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={closePopup}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
              <Link
                onClick={closePopup}
                href="/"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
