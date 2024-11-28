import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#f8fafc] flex items-center justify-center px-6 py-16">
      {/* Content Section */}
      <div className="relative z-10 flex flex-wrap items-center justify-between max-w-7xl w-full bg-white shadow-xl p-12 rounded-3xl">
        {/* Image Section */}
        <div className="h-[40vh] w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-72 h-72 rounded-xl overflow-hidden bg-gray-200 shadow-lg">
            <Image
              src="/images/about.webp" // Replace with your actual image path
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At MedTech Mavericks, we revolutionize healthcare by combining
            advanced technology with genuine care. Our mission is to empower
            individuals with the tools and knowledge they need for a healthier
            tomorrow.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transform transition-transform duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
