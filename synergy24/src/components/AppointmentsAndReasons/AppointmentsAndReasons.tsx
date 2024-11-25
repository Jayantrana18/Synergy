import React from "react";

const AppointmentsAndReasons = () => {
  return (
    <div className="bg-teal-50 py-24 px-12">
      {/* First Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
        {/* Image Section */}
        <div className="bg-teal-900 rounded-lg shadow-lg overflow-hidden">
          <img
            src="/images/image.png" // Replace with the correct image path
            alt="Appointment Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Appointment Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            GET YOUR APPOINTMENT
          </h2>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa
            mi. Aliquam in hendr Pellentesque sit amet sapieningilla, mattis
            ligula consectetur, ultrices mauris. Maecenas.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-600 transition">
            APPOINTMENT &rarr;
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-700 mb-12">
          WHY CHOOSE MEDTECH MAVERICKS?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Reason 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center text-xl font-bold text-teal-700">
            REASON 1
          </div>

          {/* Reason 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center text-xl font-bold text-teal-700">
            REASON 2
          </div>

          {/* Reason 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center text-xl font-bold text-teal-700">
            REASON 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsAndReasons;
