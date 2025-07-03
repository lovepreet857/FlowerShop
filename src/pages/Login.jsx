// Login.jsx
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link to="/signup" className="font-medium text-black underline">
              sign up
            </Link>{" "}
            if you don’t have an account
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
