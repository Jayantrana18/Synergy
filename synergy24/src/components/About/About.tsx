import React from "react";

const AboutUs = () => {
  return (
    <div className="relative h-[90vh] bg-gradient-to-b from-teal-50 via-teal-100 to-white flex items-center justify-center px-8">
      <div className="flex items-center max-w-5xl w-full space-x-12">
        {/* Image Section */}
        <div className="relative w-1/3">
          <div className="absolute -inset-1 bg-white rounded-lg"></div>
          <div
            className="relative bg-teal-300 rounded-lg shadow-lg p-8 flex items-center justify-center"
            style={{ height: "100%" }}
          >
            <p className="text-center font-bold text-white text-lg">IMAGE</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-teal-700 mb-6">ABOUT US</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa
            mi. Aliquam in hendrerit. Pellentesque sit amet sapien ligula,
            mattis ligula consectetur, ultrices mauris. Maecenas.
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-600 transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
