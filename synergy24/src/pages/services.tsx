import React from "react";
import {
  CalendarIcon,
  StarIcon,
  ShieldCheckIcon,
  SettingsIcon,
  HeartIcon,
} from "lucide-react";
import { motion } from "framer-motion"; // For animations
import Link from "next/link";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-teal-200">
      {/* Hero Section */}
      <section className="flex items-center justify-center bg-teal-900 text-white py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} // Change with your image path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Our Premium <span className="text-teal-400">Services</span>
          </h1>
          <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
            Discover the range of services we offer to take care of your health
            needs. We're committed to providing personalized, cutting-edge care
            that exceeds expectations.
          </p>
          <Link
            href="/"
            className="px-8 py-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-16 text-center">
          Our <span className="text-teal-500">Expert Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
          {/* Service 1 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-6">
              <CalendarIcon className="w-16 h-16 text-teal-500" />
            </div>
            <h3 className="text-2xl font-bold text-teal-700 mb-4 text-center">
              Appointments
            </h3>
            <p className="text-gray-600 text-center">
              Schedule your appointments with ease and flexibility. Our online
              platform lets you pick the time that suits you.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-6">
              <StarIcon className="w-16 h-16 text-teal-500" />
            </div>
            <h3 className="text-2xl font-bold text-teal-700 mb-4 text-center">
              Top-Rated Care
            </h3>
            <p className="text-gray-600 text-center">
              Our patients trust us for the highest quality care. We
              consistently achieve high ratings for our services.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-6">
              <ShieldCheckIcon className="w-16 h-16 text-teal-500" />
            </div>
            <h3 className="text-2xl font-bold text-teal-700 mb-4 text-center">
              Expertise You Can Trust
            </h3>
            <p className="text-gray-600 text-center">
              Our team consists of experienced professionals dedicated to
              delivering exceptional care and guidance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-teal-900 text-white py-32">
        <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-16">
            Why Choose <span className="text-teal-400">Us?</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <motion.div
              className="w-full sm:w-3/4 bg-white text-teal-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-6">
                <HeartIcon className="w-16 h-16 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Compassionate Care</h3>
              <p className="text-gray-800">
                Our staff is committed to treating you with compassion, respect,
                and empathy, making your visit comfortable.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="w-full sm:w-3/4 bg-white text-teal-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-6">
                <SettingsIcon className="w-16 h-16 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                State-of-the-Art Facilities
              </h3>
              <p className="text-gray-800">
                We use the latest technologies and medical equipment to provide
                you with the best healthcare experience.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="w-full sm:w-3/4 bg-white text-teal-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-16 h-16 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Certified Professionals
              </h3>
              <p className="text-gray-800">
                Our team is made up of certified experts who continuously
                upgrade their skills to provide you with top-notch care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
