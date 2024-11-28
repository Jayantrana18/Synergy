import React, { useState } from "react";
import { login, singup } from "../../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const user_auth = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await singup(name, email, password);
    }
    setLoading(false);
  };

  const toggleHelpModal = () => {
    setShowHelpModal(!showHelpModal);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/image.png')" }}
    >
      {/* Black tint overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex items-center justify-center h-full p-8 relative z-10 gap-12 md:gap-20 flex-col lg:flex-row">
        {/* Left Section: Description & Company Name */}
        <div className="w-full md:w-2/3 lg:w-1/2 text-white">
          <div className="container mx-auto px-4 py-8 bg-black bg-opacity-60 rounded-lg mt-32 md:mt-96">
            <div className="mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                Medtech Mavericks
              </h1>
              <p className="text-lg mt-2">
                Your reliable healthcare partner for a better life. We provide
                innovative solutions to enhance your health and wellbeing.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#learn-more"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-2/3 lg:w-1/4 bg-gray-800 p-8 rounded-lg shadow-lg md:mt-64 mt-0">
          <div className="text-center mb-6">
            <h1 className="text-white text-3xl">{signState}</h1>
          </div>
          <form onSubmit={user_auth}>
            {signState === "Sign Up" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-500 rounded"
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-500 rounded"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 bg-gray-700 text-white placeholder-gray-500 rounded"
            />
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white rounded hover:bg-indigo-500"
              disabled={loading}
            >
              {loading ? "Loading..." : signState}
            </button>
          </form>
          <div className="mt-6 text-center">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="text-white">Remember Me</label>
              </div>
              <p
                onClick={toggleHelpModal}
                className="text-blue-500 cursor-pointer"
              >
                Need Help?
              </p>
            </div>
            <div className="text-white">
              {signState === "Sign In" ? (
                <p>
                  New to the platform?{" "}
                  <span
                    onClick={() => setSignState("Sign Up")}
                    className="text-blue-500 cursor-pointer"
                  >
                    Sign Up Now
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => setSignState("Sign In")}
                    className="text-blue-500 cursor-pointer"
                  >
                    Sign In Now
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Need Help?
            </h2>
            <p className="mb-4 text-black">
              For assistance with patient login, please contact our support
              team:
            </p>
            <ul className="mb-4 text-black">
              <li>Email: support@medtechmavericks.com</li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
            <button
              onClick={toggleHelpModal}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
