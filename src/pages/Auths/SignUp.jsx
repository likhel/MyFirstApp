import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock,faUser } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <div className = 'flex items-center border rounded-lg px-4 py-2'>
                <input
                  type="text"
                  id="username"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                  required
                />
                <FontAwesomeIcon icon = {faUser} className='text-green-600 ml-4'/>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="flex items-center border rounded-lg px-4 py-2">
                
                <input
                  type="email"
                  id="email"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <FontAwesomeIcon icon={faEnvelope} className="text-green-600 ml-4" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className='flex items-center border rounded-lg px-4 py-2'>
                <input
                  type="password"
                  id="password"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <FontAwesomeIcon icon={faLock} className="text-green-600 ml-4" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className='flex items-center border rounded-lg px-4 py-2'>
                <input
                  type="password"
                  id="confirmpassword"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required
                />
                <FontAwesomeIcon icon={faLock} className="text-green-600 ml-4" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-green-600 transition duration-200 border-2 border-green-600 border-solid"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp


