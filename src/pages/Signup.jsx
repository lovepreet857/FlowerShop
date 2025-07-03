// Signup.jsx
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Create an account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-black underline">
              Log in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
