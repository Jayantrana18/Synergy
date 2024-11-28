import React, { useState } from "react";
import {
  CalendarIcon,
  ShieldCheckIcon,
  StarIcon,
  MessageCircleIcon,
  BellIcon,
} from "lucide-react";
import Link from "next/link";

const AppointmentsAndReasons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-100 py-24 px-8">
      {/* First Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-24">
        {/* Image Section */}
        <div className="bg-teal-900 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="/images/appointment.jpg" // Replace with the correct image path
            alt="Appointment Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Appointment Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-6 leading-tight">
            Schedule Your <span className="text-teal-500">Appointment</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Take the next step towards better health. Our team is here to guide
            you with personalized care and innovative medical solutions. Book
            your appointment today and experience the best in healthcare.
          </p>
          <button
            onClick={openModal} // Open the modal when clicked
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:from-teal-600 hover:to-teal-700 hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
          >
            Get Appointment &rarr;
          </button>
        </div>
      </div>

      {/* Modal for Sign In */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-auto">
            <h2 className="text-xl font-bold text-teal-700 mb-4">
              Sign In to Continue
            </h2>
            <p className="text-gray-600 mb-6">
              Please sign in to book your appointment and access our services.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                onClick={closeModal}
                href="/" // Replace with actual sign-in route
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                Sign In
              </Link>
              <button
                onClick={closeModal} // Close modal when clicked
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-12 text-center">
          Why Choose <span className="text-teal-500">MedTech Mavericks?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Reason 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <CalendarIcon className="w-12 h-12 text-teal-500 mb-6" />
            <h3 className="text-xl font-bold text-teal-700 mb-4">
              Flexible Appointments
            </h3>
            <p className="text-gray-600">
              We offer convenient scheduling options tailored to fit your busy
              lifestyle.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <ShieldCheckIcon className="w-12 h-12 text-teal-500 mb-6" />
            <h3 className="text-xl font-bold text-teal-700 mb-4">
              Trusted Expertise
            </h3>
            <p className="text-gray-600">
              Our experienced professionals are dedicated to delivering
              top-notch care.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <StarIcon className="w-12 h-12 text-teal-500 mb-6" />
            <h3 className="text-xl font-bold text-teal-700 mb-4">
              Patient Satisfaction
            </h3>
            <p className="text-gray-600">
              Our commitment to quality has earned us a reputation for
              excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
    </div>
  );
};

export default AppointmentsAndReasons;
