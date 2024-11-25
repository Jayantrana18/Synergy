import React, { useState } from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Tracks whether the user is signing up or logging in
  const [userType, setUserType] = useState<"Doctor" | "Patient" | "">(""); // Tracks user type for registration

  // State for login form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter(); // Initialize router from next/router

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Validate login form fields
    if (email.trim() && password.trim()) {
      // Redirect to the dashboard if fields are valid
      router.push("/dashboard"); // Use router.push for navigation
    } else {
      alert("Please fill in all fields to log in!");
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/image.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex h-full items-center justify-start px-8">
        {/* Left Content */}
        <div className="text-white max-w-md ml-8">
          <h1 className="text-4xl font-bold mb-4">COMPANY NAME</h1>
          <p className="text-lg">QUOTE----</p>
        </div>

        {/* Form Container */}
        <div
          className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 shadow-lg w-1/4 ml-auto mr-28"
          style={{ backdropFilter: "blur(15px)" }}
        >
          {isSignUp ? (
            // Sign-Up Form
            <div>
              <h2 className="text-2xl font-bold mb-6 text-teal-200">SIGN UP</h2>
              <form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border placeholder-white text-white focus:ring-2 focus:ring-teal-400 focus:outline-none bg-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border placeholder-white text-white focus:ring-2 focus:ring-teal-400 focus:outline-none bg-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 rounded-md border placeholder-white text-white focus:ring-2 focus:ring-teal-400 focus:outline-none bg-transparent"
                    placeholder="Enter your password"
                  />
                </div>

                {/* User Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    I am a:
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-md border ${
                        userType === "Doctor"
                          ? "bg-teal-500 text-white"
                          : "bg-transparent text-teal-300"
                      }`}
                      onClick={() => setUserType("Doctor")}
                    >
                      Doctor
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-md border ${
                        userType === "Patient"
                          ? "bg-teal-500 text-white"
                          : "bg-transparent text-teal-300"
                      }`}
                      onClick={() => setUserType("Patient")}
                    >
                      Patient
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md font-bold"
                >
                  SIGN UP
                </button>
              </form>
              <p className="text-sm text-gray-300 mt-4">
                Already have an account?{" "}
                <button
                  className="text-teal-500 font-bold hover:underline"
                  onClick={() => setIsSignUp(false)}
                >
                  Log In
                </button>
              </p>
            </div>
          ) : (
            // Login Form
            <div>
              <h2 className="text-2xl font-bold mb-6 text-teal-200">LOGIN</h2>
              <form className="space-y-4" onSubmit={handleLogin}>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border placeholder-white text-white focus:ring-2 focus:ring-teal-400 focus:outline-none bg-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border placeholder-white text-white focus:ring-2 focus:ring-teal-400 focus:outline-none bg-transparent"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md font-bold"
                >
                  LOGIN
                </button>
              </form>
              <p className="text-sm text-gray-200 mt-4">
                Don’t have an account?{" "}
                <button
                  className="text-teal-500 font-bold hover:underline"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
              </p>
              <p className="text-sm text-teal-500 font-bold hover:underline mt-2">
                <a href="#">Forgot Password?</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
