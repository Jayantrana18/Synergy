import React from "react";
import { CalendarIcon, ShieldCheckIcon, StarIcon } from "lucide-react";

const AppointmentsAndReasons = () => {
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
          <button className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:from-teal-600 hover:to-teal-700 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            Get Appointment &rarr;
          </button>
        </div>
      </div>

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
    </div>
  );
};

export default AppointmentsAndReasons;
